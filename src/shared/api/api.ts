import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization =
    localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
  return config;
});
