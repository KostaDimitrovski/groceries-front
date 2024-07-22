import axios, { AxiosInstance } from 'axios';
import { store } from './store/store';
import { login, logout } from './store/user/authSlice';

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
    }
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        // todo: 500 ne e tocno
        if (error.response.status === 500 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken) {
                try {
                    const response = await axios.post('http://localhost:8080/api/auth/refresh-token', {}, {
                        headers: { 'Authorization': `Bearer ${refreshToken}` }
                    });
                    const { token, refreshToken: newRefreshToken } = response.data;
                    localStorage.setItem('token', token);
                    localStorage.setItem('refreshToken', newRefreshToken);
                    store.dispatch(login({ username: store.getState().auth.user!.username, token, refreshToken: newRefreshToken }));
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return axios(originalRequest);
                } catch (err) {
                    store.dispatch(logout());
                    window.location.href = '/login';
                    return Promise.reject(err);
                }
            } else {
                store.dispatch(logout());
                window.location.href = '/login';
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);

export default instance;
