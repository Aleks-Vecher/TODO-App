import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

// let preloadedState;
// const persistedTodosString = localStorage.getItem('state');
//
// if (persistedTodosString) {
//   preloadedState = JSON.parse(persistedTodosString);
// }

const store = createStore(rootReducer, undefined, composeWithDevTools());

// store.subscribe(() => {
//   localStorage.setItem('state', JSON.stringify(store.getState()));
// });

export default store;
