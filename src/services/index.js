import axios from 'axios';

const api = axios.create({
    baseURL: 'https://chapa-quente-backend.herokuapp.com'
});

export default api;