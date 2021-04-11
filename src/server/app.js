import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import path from 'path';
import { ChunkExtractor } from '@loadable/server';
import rootReducer from '../store/reducers/index';
import App from '../App';

const express = require('express');

const sendHTMLPage = (req, res) => {
  const statsFile = path.resolve(__dirname, '../dist/loadable-stats.json');
  const extractor = new ChunkExtractor({ statsFile });
  const context = {};
  const serverStore = createStore(rootReducer);
  const preloadedState = serverStore.getState();

  const jsx = extractor.collectChunks(
    <Provider store={serverStore}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  const html = renderToString(jsx);
  const scriptTags = extractor.getScriptTags();
  const linkTags = extractor.getLinkTags();
  const styleTags = extractor.getStyleTags();

  res.status(context.statusCode || 200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <title>TODO App</title>
    ${styleTags}
    ${linkTags}
</head>
<body>
<div id="app">${html}</div>
<script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c',
          )}
</script>
${scriptTags}
</body>
</html>
`);
};

const app = express();

export default app
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, './common')))
  .use(sendHTMLPage);
