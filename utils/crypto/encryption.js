var CryptoJS = require("crypto-js");

export const encrypt = (text) => {
  var ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify({ text }),
    `${process.env.ENCRYPTION_KEY}`
  ).toString();
  return ciphertext;
};
