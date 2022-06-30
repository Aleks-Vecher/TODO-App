import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

// eslint-disable-next-line import/no-mutable-exports
// let preloadedState;
//
// if (BROWSER) {
//   const persistedTodosString = localStorage.getItem('state');
//
//   if (persistedTodosString) {
//     preloadedState = JSON.parse(persistedTodosString);
//   }
// }
let preloadedStateNew;
// eslint-disable-next-line no-undef
if (BROWSER) {
  preloadedStateNew = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
}

const store = createStore(
  rootReducer,
  preloadedStateNew,
  composeWithDevTools(),
);

// if (BROWSER) {
//   store.subscribe(() => {
//     localStorage.setItem('state', JSON.stringify(store.getState()));
//   });
// }

export default store;
// export { preloadedState };
