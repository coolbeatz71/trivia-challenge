import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_BASE_URL } from '@constants/app';
import { IResponse } from '@interfaces/app';

const api = axios.create({
    timeout: 8000,
    baseURL: API_BASE_URL,
});

const requestHandler = (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.params = {
        amount: 10,
        difficulty: 'hard',
        type: 'boolean',
        ...config.params,
    };
    return config;
};

const responseHandler = (response: AxiosResponse): IResponse[] => response.data;
const errorHandler = async (error: AxiosError): Promise<AxiosError> => {
    const errorResponse = error.response ? error.response.data : error.message;
    return await Promise.reject(errorResponse);
};

api.interceptors.request.use(requestHandler);
api.interceptors.response.use(responseHandler, errorHandler);

export default api;
