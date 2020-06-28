import express from 'express';
import path from 'path';
import handleSearch from './handlers/searchHandler';
import handleGetItem from './handlers/itemHandler';
import handleSSR from './handlers/ssrHandler';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, './ui/')));

app.get('/', (req, res) => res.sendFile('index.html'));

app.get('/items', handleSSR);

app.get('/items:id', handleSSR);

app.get('/api/items', handleSearch);

app.get('/api/items/:id', handleGetItem);

// 404
app.get('*', function(req, res){
    res.status(404).send('Sorry');
  });

app.listen(port, () => console.log(`Marketplace search listening on port ${port}!`));
