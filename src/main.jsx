import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

window.React = React;
ReactDom.render(<App />, document.querySelector('#app'));

if (module && module.hot) {
  module.hot.accept();
}
