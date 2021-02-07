import { combineReducers } from 'redux';
import { categoriesReducer } from './categories';

const rootReducer = combineReducers({
  data: categoriesReducer,
});

export default rootReducer;
