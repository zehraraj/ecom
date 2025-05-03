/* eslint-disable */

export const emailValidator = (text) => {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
    text
  );
};

export const textValidator = (text) => {
  return /^[a-zA-Z0-9_ ]*$/.test(text);
};

export const slugValidator = (text) => {
  return /^[a-zA-Z0-9_ ,-\/\n]*$/.test(text);
};

export const textNoSpaceValidator = (text) => {
  return /^[a-zA-Z0-9_]*$/.test(text);
};

export const urlValidator = (text) => {
  return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
    text
  );
};

export const numberValidator = (text) => {
  return /^[0-9]*$/.test(text);
};
