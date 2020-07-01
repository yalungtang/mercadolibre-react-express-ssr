import axios from 'axios';
import { parseSearchResponse } from '../utils/parsers';

const handleSearch = (request, response) => {
  const searchQuery = request.query.search;

  if (searchQuery != null) {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`).then((apiRes) => {
      response.send(parseSearchResponse(apiRes.data))
    }).catch(() => response.status(404).send('No results'));
  } else {
    response.end();
  }
};

export default handleSearch;
