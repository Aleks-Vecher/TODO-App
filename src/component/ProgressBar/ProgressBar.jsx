import React from 'react';
import ProgBar from './ProgBar';

const ProgressBar = ({ todo }) => (
  <div className="App">
    <ProgBar completed={todo} />
  </div>
);

export default ProgressBar;
