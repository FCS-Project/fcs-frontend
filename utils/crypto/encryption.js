var CryptoJS = require("crypto-js");

export const encrypt = (text) => {
  var ciphertext = CryptoJS.AES.encrypt(
    text,
    `${process.env.ENCRYPTION_KEY}`
  ).toString();
  return ciphertext;
};
