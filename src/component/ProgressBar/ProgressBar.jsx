import { ProgressBar } from 'react-bootstrap';
import React from 'react';

const ProgBar = ({ todo }) => {
  console.log(todo);
  return <ProgressBar now={todo} label={`${todo || '0'}%`} />;
};

export default ProgBar;
