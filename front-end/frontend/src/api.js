// frontend/src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // your backend URL
});

export const getUsers = () => api.get('/users');
export const createUser = (userData) => api.post('/users', userData);
