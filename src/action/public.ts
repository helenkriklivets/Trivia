// Constants
import { RECEIVE_TEST_DATA } from 'constantList';

// Model
import TestData from 'model/TestData';
// Service
import { ApiInfoService } from 'service';

const receiveResultAction = (results: TestData) =>  ({
    type: RECEIVE_TEST_DATA,
    payload: { results },
});

export const getResultsData = () => (dispatch) => {
    return ApiInfoService.getResults()
        .then((results) => {
            console.log(results);
            dispatch(receiveResultAction(results));
        });
};
