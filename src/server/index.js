import React from 'react';
import app from './app';

global.React = React;
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}!\n`);
});
