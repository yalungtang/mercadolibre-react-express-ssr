import axios from 'axios';
import { parseApiResponse } from './utils/parsers';

const handleSearch = (request, response) => {
  const searchQuery = request.query.search;

  if (searchQuery) {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`).then((apiRes) => {
      response.send(parseApiResponse(apiRes.data))
    });
  } else {
    response.end();
  }
};

export default handleSearch;
