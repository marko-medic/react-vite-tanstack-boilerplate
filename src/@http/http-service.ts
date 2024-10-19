import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

const httpInstance = axios.create({
  baseURL: `${BASE_URL}/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { httpInstance };
