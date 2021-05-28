import update from 'immutability-helper';
// Constants
import { RECEIVE_TEST_DATA, ACTIVE_ITEM } from 'constantList';
// Model
import TestData from 'model/TestData';
import TestItem from 'model/TestItem';

const initialState: {
    testData: TestData,
    // activeItem: TestItem,
} = {
    testData: null,
    // activeItem: null,
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TEST_DATA: {
            const { results } = action.payload;
            return update(state, {
                testData: { $set: results },
            });
        }
        // case ACTIVE_ITEM: {
        //     // const { results } = action.payload;
        //     // console.log('results', results);
        //     console.log('initialState.testData in ACTIVE_ITEM', initialState.testData);
        //     return update(state, {
        //         activeItem: { $set: initialState.testData[0] },
        //     });
        // }
        default:
            return state;
    }
};

export default mainReducer;
