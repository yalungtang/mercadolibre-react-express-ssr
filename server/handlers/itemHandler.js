import axios from 'axios';
import { parseItemResponse } from '../utils/parsers';

const handleGetItem = (request, response) => {
  const id = request.params.id;

  const item = axios.get(`https://api.mercadolibre.com/items/${id}`);
  const description = axios.get(`https://api.mercadolibre.com/items/${id}/description`);

  if (id) {
    Promise.allSettled([item, description]).then((responses) => {
      response.send({
        ...parseItemResponse(responses[0].value.data),
        description: responses[1].status === "rejected" ? '' : responses[0].value.plain_text
      });
    })//.catch(e => response.status(404).send('No item found'));
  } else {
    response.end();
  }
};

export default handleGetItem;
