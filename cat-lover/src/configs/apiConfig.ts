import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_7xrwLirpdoaXmUd7Q68VdlS6QaaCtteQbmWTd439KUtdyj53D4QlgrSdaZBopVuA",
  },
});

const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
