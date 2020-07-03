import path from 'path';
import fs from 'fs';
import React from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server'

import App from '../../web-ui/src/components/App';

const replaceApp = (request, response, initialProps) => {
  fs.readFile(path.resolve('./dist/ui/index.html'), 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
      return response.status(500).send('Server error')
    }
    const stringApp = ReactDOMServer.renderToString(
      <StaticRouter location={request.url} context={{}}>
        <App {...initialProps} />
      </StaticRouter>
    );
    const helmet = Helmet.renderStatic();
    response.send(data.replace(
      '<script></script>',
      `<script>
        window.__INITIAL_STATE = ${JSON.stringify(initialProps)}
      </script>`).replace(
      '<div id="root"></div>',
      `<div id="root">
        ${stringApp}
      </div>`).replace(
        '</head>',
        `
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        </head>`
      ));
  })
}

const ssrHandler = (request, response) => {
  const id = request.params.id;
  const searchQuery = request.query.search;

  if (id) {
    axios.get(`http://localhost:3000/api/items/${id}`).then((r) => {
      const { item } = r.data;
      replaceApp(request, response, { item })
    }).catch((e) => response.status(404).send('Item not found'));
  } else if (searchQuery) {
    axios.get(`http://localhost:3000/api/items?search=${searchQuery}`).then((r) => {
      const { items, categories } = r.data;
      replaceApp(request, response, { searchResults: { items, categories }, search: searchQuery })
    }).catch((e) => response.status(404).send('No results'));
  } else {
    replaceApp(request, response, {})
  }
};

export default ssrHandler;
