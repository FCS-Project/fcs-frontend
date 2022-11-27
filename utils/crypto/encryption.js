var CryptoJS = require("crypto-js");

export const encrypt = (text) => {
  const NodeRSA = require("node-rsa");
  const key = new NodeRSA(process.env.RSA_PRIVATE_KEY);
  // const test = "hello";
  // const encrypted = key.encrypt(test, "base64");
  console.log("hell", process.env.RSA_PRIVATE_KEY);
  // return encrypted;
};
