import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

// const ReactReduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// let preloadedState;
// const persistedTodosString = localStorage.getItem('state');
//
// if (persistedTodosString) {
//   preloadedState = JSON.parse(persistedTodosString);
// }
// console.log(persistedTodosString);

const store = createStore(rootReducer, undefined, composeWithDevTools());

// store.subscribe(() => {
//   localStorage.setItem('state', JSON.stringify(store.getState()));
// });

export default store;
