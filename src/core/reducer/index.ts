import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mainReducer from 'reducers/mainReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  mainReducer,
});

export default rootReducer;
