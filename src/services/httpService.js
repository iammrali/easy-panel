import axios from "axios";

let token = null;

const getToken = () => {
  if (!token) token = "faketoken";

  return token;
};

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = getToken();
  return config;
});

const clearToken = () => (token = null);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  clearToken,
};

export default http;
