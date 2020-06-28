import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server'

import App from '../web-ui/src/components/App';

const ssrHandler = (request, response, __next) => {
  fs.readFile(path.resolve('./dist/ui/index.html'), 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
      return response.status(500).send('Server error')
    }
    response.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`));
  })
};

export default ssrHandler;
