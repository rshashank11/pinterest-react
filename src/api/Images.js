import axios from "axios";

import { baseURL } from "./baseAPI";

export const getImages = async (query) => {
  const requestURL = `${baseURL}&${query}`;
  const controller = new AbortController();
  const signal = controller.signal;
  const data = axios
    .get(requestURL, { maxRedirects: 0, signal })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Request failed:", error);
    });
  return data;
};
