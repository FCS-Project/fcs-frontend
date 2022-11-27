var CryptoJS = require("crypto-js");

export const encrypt = () => {
  var ciphertext = CryptoJS.AES.encrypt(
    encrypt(JSON.stringify({ text })),
    `${process.env.ENCRYPTION_KEY}`
  ).toString();
  return ciphertext;
};
