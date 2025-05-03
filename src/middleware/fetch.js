import TokenInjector from "./injectors/tokenInjector";
import config from "./config";

const jFetch = fetch;

export default function myfetch(url, options) {
  return new Promise(async (resolve, reject) => {
    let resp = await jFetch(url, options);

    if (resp.status === 401) {
      let response = await fetch(config.baseUrl + config.refresh, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh: TokenInjector.getInstance().getRefreshToken(),
        }),
      });

      if (response.status === 200) {
        let data = await response.json();
        localStorage.setItem("Token", data["access"]);
        window.location.reload();
        resolve(await myfetch(url, options));
      } else if (response.status === 401) {
        window.location = "/login/";
        localStorage.clear();
        reject("Refresh Token Invalid");
      }
    } else resolve(resp);
  });
}
