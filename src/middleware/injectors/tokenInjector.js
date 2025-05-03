import config from "../config";

export default class TokenInjector {
  obj = null;

  static getInstance = () => {
    if (this.obj !== null) this.obj = new TokenInjector();

    return this.obj;
  };

  getToken = () => {
    if (localStorage.getItem("Token"))
      return "Bearer " + localStorage.getItem("Token");
    else return null;
  };

  getRefreshToken = () => {
    if (localStorage.getItem("Refresh"))
      return localStorage.getItem("Refresh") + "";
    else return null;
  };

  getType = () => {
    return localStorage.getItem("type") + "";
  };

  getEmail = () => {
    return localStorage.getItem("email") + "";
  };

  setTokens = (tokens) => {
    localStorage.setItem("Token", tokens["access"]);
    localStorage.setItem("Refresh", tokens["refresh"]);
  };

  async loginToken(email, password, successFunction, failFunction) {
    let response = await fetch(config.baseUrl + config.token, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    let data = await response.json();
    if (response.status === 200) {
      this.setTokens(data);
      successFunction(data);
    } else {
      failFunction(response.status, data);
    }
  }

  async refreshToken() {
    let response = await fetch(config.baseUrl + config.refresh, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: this.getRefreshToken(),
      }),
    });

    if (response.status === 200) {
      let data = await response.json();
      localStorage.setItem("Token", data["access"]);
      return true;
    } else if (response.status === 401) {
      localStorage.clear();
      console.log("refresh fail");
      return false;
    }
  }
}
