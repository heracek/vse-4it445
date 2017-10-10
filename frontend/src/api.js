import axios from 'axios';
export const API_URL = 'http://dev.backend.USERNAME.vse.handson.pro';
//export const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
