import { combineReducers } from 'redux';
import { categoriesReducer } from './categories';
import { todosReducer } from './todos';
import { filterReducer } from './filter';

const rootReducer = combineReducers({
  data: categoriesReducer,
  todo: todosReducer,
  filter: filterReducer,
});

export default rootReducer;
