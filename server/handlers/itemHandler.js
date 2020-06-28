import axios from 'axios';
import { parseItemResponse } from '../utils/parsers';

const handleGetItem = (request, response) => {
  const id = request.params.id;

  const item = axios.get(`https://api.mercadolibre.com/items/${id}`);
  const description = axios.get(`https://api.mercadolibre.com/items/${id}/description`);

  if (id) {
    Promise.all([item, description]).then((responses) => {
      response.send({
        ...parseItemResponse(responses[0].data),
        description: responses[1].plain_text
      });
    });
  } else {
    response.end();
  }
};

export default handleGetItem;
