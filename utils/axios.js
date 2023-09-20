import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle response errors here
        return Promise.reject(error);
    }
);

export default axiosInstance;