import axios from "axios";
import https from "https";

const instance = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false }), // Custom httpsAgent
});

// Request interceptor to add maxRedirects option
instance.interceptors.request.use(
  (config) => {
    config.maxRedirects = 0; // Prevent following redirects
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
