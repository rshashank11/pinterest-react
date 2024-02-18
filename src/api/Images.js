import axios from "axios";
import { baseURL } from "./baseAPI";

export const getImages = async (query, options) => {
  const requestURL = `${baseURL}&${query}`;
  const data = axios
    .get(requestURL, options)
    .then((res) => res.data)
    .then((data) => {
      return data;
    });
  return data;
};
