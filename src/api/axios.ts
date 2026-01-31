import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the auth token/tenant info if needed
axiosInstance.interceptors.request.use(
    (config) => {
        // You can get the session here if needed, but usually it's better to pass it from components
        // or handle it via cookies which NextAuth does automatically for same-origin
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
