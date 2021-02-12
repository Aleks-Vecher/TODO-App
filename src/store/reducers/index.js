import { combineReducers } from 'redux';
import { categoriesReducer } from './categories';
import { todosReducer } from './todos';

const rootReducer = combineReducers({
  data: categoriesReducer,
  todo: todosReducer,
});

export default rootReducer;
