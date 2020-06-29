import path from 'path';
import fs from 'fs';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server'
import axios from 'axios';

import App from '../../web-ui/src/components/App';
import { fromPairs } from 'lodash';

const replaceApp = (request ,response, initialProps) => {
  fs.readFile(path.resolve('./dist/ui/index.html'), 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
      return response.status(500).send('Server error')
    }
    response.send(data.replace(
      '<div id="root"></div>',
      `<div id="root" data-init='${JSON.stringify(initialProps)}'>
        ${ReactDOMServer.renderToString(
        <StaticRouter location={request.url} context={{}}>
          <App {...initialProps} />
        </StaticRouter>
      )}
      </div>`));
  })
}

const ssrHandler = (request, response) => {
  console.log('SSR HANDLER WAS CALLED');
  const id = request.params.id;
  const searchQuery = request.query.search;

  console.log('this is the requested id:', id);
  if (id) {
    axios.get(`http://localhost:3000/api/items/${id}`).then((r) => {
    const { item } = r.data;
    console.log(item)
      replaceApp(request, response, { item })
    }).catch((e) => response.send(e));
  } else if (searchQuery) {
    axios.get(`http://localhost:3000/api/items?search=${searchQuery}`).then((r) => {
      const { items, categories } = r.data;
      replaceApp(request, response, { searchResults: { items, categories } })
    }).catch((e) => response.send(e));
  } else {
    replaceApp(request, response, {})
  }
};

export default ssrHandler;
