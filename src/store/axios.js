import axios from 'axios';
import Storage from "./localStore";

const instance = axios.create({
    baseURL: `http://localhost:3001/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    }
});

instance.interceptors.request.use(function (config) {
    const token = Storage.getToken();
    const tokenHeader = Storage.getTokenHeader();

    if(token) {
        config.headers['Authorization'] = token;
    }
    if (tokenHeader) {
        config.headers['token'] = tokenHeader;
    }

    return config;
}, function (error) {
    Promise.reject(error)
});

export default instance;
