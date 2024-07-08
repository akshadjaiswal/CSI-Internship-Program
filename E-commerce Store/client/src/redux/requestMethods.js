import axios from "axios";

const BASE_URL = "https://urban-store-server.vercel.app/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  //   header: {
  //     token: `Bearer ${TOKEN}`,
  //   },
});
