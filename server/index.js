import express from 'express';
import path from 'path';
import handleSearch from './handlers/searchHandler';
import handleGetItem from './handlers/itemHandler';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, './ui/')));

app.get('/', (req, res) => res.sendFile('index.html'));

app.get('/api/items', handleSearch);

app.get('/api/items/:id', handleGetItem);

app.listen(port, () => console.log(`Marketplace search listening on port ${port}!`));
