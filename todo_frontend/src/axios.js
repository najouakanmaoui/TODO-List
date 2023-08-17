// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8081/', 
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('user_token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default instance;