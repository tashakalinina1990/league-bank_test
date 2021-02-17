import axios from 'axios';

const EXCHANGE_RATES_URL = `https://api.exchangeratesapi.io/`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: EXCHANGE_RATES_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });

  return api;
};
