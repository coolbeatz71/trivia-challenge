import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '@constants/app';
import { IUnknownObject, IResultData } from '@interfaces/app';

const responseHandler = (response: IUnknownObject): IResultData => response.results;

const errorHandler = async (error: AxiosError): Promise<AxiosError> => {
    const errorResponse = error.response ? error.response.data : error.message;
    return await Promise.reject(errorResponse);
};

const api = axios.create({
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

api.interceptors.request.use(requestHandler);
api.interceptors.response.use(responseHandler, errorHandler);
