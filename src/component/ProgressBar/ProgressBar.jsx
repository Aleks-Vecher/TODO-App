import { ProgressBar } from 'react-bootstrap';
import React from 'react';

const ProgBar = ({ todo }) => (
  <ProgressBar now={todo} label={`${todo || '0'}%`} />
);

export default ProgBar;
