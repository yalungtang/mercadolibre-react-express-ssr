import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Search home'));

app.get('/api/items', (request, response) => {
    const searchQuery = request.query.search;

    if (searchQuery != null) {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`).then((apiRes) => {
            console.log(apiRes.data)
            response.send(apiRes.data)
        });
    } else {
        response.end();
    }
});

app.listen(port, () => console.log(`Marketplace search listening on port ${port}!`));
