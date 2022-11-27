var CryptoJS = require("crypto-js");

export const decrypt = (ciphertext) => {
  var bytes = CryptoJS.AES.decrypt(ciphertext, `${process.env.ENCRYPTION_KEY}`);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
