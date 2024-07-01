import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
    }
});

export default instance;
