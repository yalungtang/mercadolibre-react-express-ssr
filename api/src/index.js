import express from 'express';
import handleSearch from './handlers/searchHandler';
import handleGetItem from './handlers/itemHandler';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Search home'));

app.get('/api/items', handleSearch);

app.get('/api/items/:id', handleGetItem);

app.listen(port, () => console.log(`Marketplace search listening on port ${port}!`));
