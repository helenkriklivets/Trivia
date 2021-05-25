import axios from 'axios';

import ApiInfoService from 'service/ApiInfoService';
import ApiError from 'model/ApiError';

/**
 * Axios instance for accessing the API
 */
const serviceAxios = axios.create({
    baseURL: 'https://opentdb.com/api.php', // use environment-provided API URL
});

serviceAxios.interceptors.response.use(
    // onFulfulled
    (value) => value,
    // onRejected
    (error) => {
        if (axios.isCancel(error)) {
            console.log('Axios request was canceled. No error.');
            return Promise.reject(ApiError.axiosError(error.response));
        }

        return Promise.reject(ApiError.axiosError(error.response));
    },
);

const ConfiguredApiService = new ApiInfoService(serviceAxios);

export {
    ConfiguredApiService as ApiInfoService,
};


