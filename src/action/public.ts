// Constants
import { RECEIVE_TEST_DATA, ACTIVE_ITEM } from 'constantList';

// Model
import TestData from 'model/TestData';
// Service
import { ApiInfoService } from 'service';

const receiveResultAction = (results: TestData) =>  ({
    type: RECEIVE_TEST_DATA,
    payload: { results },
});

// const receiveActiveItem = () => ({
//     type: ACTIVE_ITEM,
//     payload: {  },
// });

export const getResultsData = (query) => (dispatch) => {
    return ApiInfoService.getResults(query)
        .then((results) => {
            console.log(results);
            dispatch(receiveResultAction(results));
        });
};

export const getActiveItem = () => {
    // return ApiInfoService.getResults()
    //     .then((results) => {
            console.log('get active item fn');
        // });
};
