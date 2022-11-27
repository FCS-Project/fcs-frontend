var CryptoJS = require("crypto-js");

export const encrypt = (text) => {
  const NodeRSA = require("node-rsa");
  const key = new NodeRSA(
    process.env.RSA_PRIVATE_KEY.toString().split(",").join("\n")
  );
  const encrypted = key.encrypt(text, "base64");
  return encrypted;
};
