import update from 'immutability-helper';
// Constants
import { RECEIVE_TEST_DATA } from 'constantList';
// Model
import TestData from 'model/TestData';

const initialState: {
    testData: TestData,
} = {
    testData: null,
};

const mainReducer = (state = initialState, action) => {
    console.log('reducer', initialState, action);
    switch (action.type) {
        case RECEIVE_TEST_DATA: {
            console.log('RECEIVE_TEST_DATA', action.payload);
            return update(state, {
            });
        }
        default:
            return state;
    }
};

export default mainReducer;
