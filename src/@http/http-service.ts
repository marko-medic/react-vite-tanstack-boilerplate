import axios from 'axios';

const BASE_URL = 'base-url-goes-here';

const httpInstance = axios.create({
  baseURL: `${BASE_URL}/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { httpInstance };
