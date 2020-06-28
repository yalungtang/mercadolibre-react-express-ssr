import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import axios from 'axios';

import App from '../../web-ui/src/components/App';

const replaceApp = (response, initialProps) => {
  fs.readFile(path.resolve('./dist/ui/index.html'), 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
      return response.status(500).send('Server error')
    }
    console.log(typeof initialProps)
    response.send(data.replace('<div id="root"></div>', `<div id="root" data-init='${JSON.stringify(initialProps)}'>${ReactDOMServer.renderToString(<App {...initialProps} />)}</div>`));
  })
}

const ssrHandler = (request, response) => {
  const id = request.params.id;
  const searchQuery = request.query.search;

  if (id) {
    axios.get(`http://localhost:3000/api/items/${id}`).then((r) => {
      replaceApp(response, r.data)
    }).catch((e) => response.send(e));
  } else if (searchQuery) {
    axios.get(`http://localhost:3000/api/items?search=${searchQuery}`).then((r) => {
      replaceApp(response, r.data)
    }).catch((e) => response.send(e));
  } else {
    replaceApp(response, {})
  }
};

export default ssrHandler;
