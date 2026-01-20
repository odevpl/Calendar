import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:4000', // adres JSON-server
  timeout: 5000,
});