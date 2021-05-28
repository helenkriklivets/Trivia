import axios, {AxiosInstance} from 'axios';
// Model
import TestData from 'model/TestData';

// test url for ajax
const GET_RESULTS_URL = process.env.REACT_APP_BASE_URL;
const content = { /* No content in request body */};


class ApiInfoService {
    private _axios: AxiosInstance;

    public constructor(axios: AxiosInstance) {
        this._axios = axios;
    }

    public getResults(query): Promise<TestData> {
        return this._axios.request({
            url: GET_RESULTS_URL + '?' + query + '&type=boolean',
            method: 'GET',
            ...content,
        }).then(({data}) => data.results as TestData);

    }

}

export default ApiInfoService;

