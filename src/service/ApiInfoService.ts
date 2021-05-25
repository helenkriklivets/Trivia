import axios, { AxiosInstance } from 'axios';
// Model
import TestData from 'model/TestData';

// test url for ajax
const GET_RESULTS_URL = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean';
const content = { /* No content in request body */ };


class ApiInfoService {
    private _axios: AxiosInstance;
    public constructor(axios: AxiosInstance) {
        this._axios = axios;
    }

    public getResults(): Promise<TestData> {
        console.log('get Results request');

        return this._axios.request({
            url: GET_RESULTS_URL,
            method: 'GET',
            ...content,
        }).then(({ data }) => data.results as TestData);

    }

}

export default ApiInfoService;

