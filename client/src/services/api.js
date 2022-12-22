import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const getProducts = async () => {
  return httpClient.get('products');
};
