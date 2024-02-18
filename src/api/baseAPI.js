const API_KEY = import.meta.env.VITE_API_KEY;
export const baseURL = `https://pixabay.com/api` + `?key=${API_KEY}`;
console.log(baseURL);
