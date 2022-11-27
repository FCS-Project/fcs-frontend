//The Function Below To Decrypt Text
const CryptoJS = require("crypto-js");
export const decryptWithAES = (ciphertext) => {
  const passphrase = "zXpuh)hbuq&w2ThqxF*JVBXXTF75NSQW";
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
