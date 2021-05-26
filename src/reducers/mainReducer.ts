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
    switch (action.type) {
        case RECEIVE_TEST_DATA: {
            const { results } = action.payload.results;
            return update(state, {
                testData: { $set: results },
            });
        }
        default:
            return state;
    }
};

export default mainReducer;
