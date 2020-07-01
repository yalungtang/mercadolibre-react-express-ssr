import axios from 'axios';

export const getItem = (id) => {
  return axios.get(`http://localhost:3000/api/items/${id}`)
};

export const searchApi = (searchQuery) => {
  return axios.get(`http://localhost:3000/api/items?search=${searchQuery}`)
};
