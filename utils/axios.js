import axios from "axios";
import { BASE_API_URL } from "../constants";

const instance = axios.create({
  timeout: 15000,
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default instance;
