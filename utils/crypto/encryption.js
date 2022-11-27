//The Function Below To Encrypt Text
var AES = require("crypto-js/aes");
export const encryptWithAES = (text) => {
  const passphrase = "zXpuh)hbuq&w2ThqxF*JVBXXTF75NSQW";
  return AES.encrypt(text, passphrase).toString();
};
