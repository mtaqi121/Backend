import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const apiRequest = async (method = "POST", url = "/uploads", data = {}, params = {}) => {
  const res = await api({ method, url, data, params });
  return res;
};

export { apiRequest };
