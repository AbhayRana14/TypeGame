import { combineReducers } from 'redux';
import deviceReducer from './game/reducer';

const rootReducer = combineReducers({
  deviceReducer,
});

export default rootReducer;
