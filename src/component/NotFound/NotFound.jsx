import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h3>404 Not Found :( </h3>
    <Link to="/">
      <button type="button">go back Dude</button>
    </Link>
  </div>
);

export default NotFound;
