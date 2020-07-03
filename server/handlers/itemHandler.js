import axios from 'axios';
import { parseItemResponse } from '../utils/parsers';

const handleGetItem = (request, response) => {
  const id = request.params.id;

  const item = axios.get(`https://api.mercadolibre.com/items/${id}`);
  const description = axios.get(`https://api.mercadolibre.com/items/${id}/description`);

  if (id) {
    Promise.allSettled([item, description]).then((responses) => {
      axios.get(`https://api.mercadolibre.com/categories/${responses[0].value.data.category_id}`).then((catResponse) => {
        response.send(parseItemResponse(
          responses[0].value.data,
          responses[1].status === "rejected" ? '' : responses[1].value.data.plain_text,
          catResponse.data.path_from_root ? catResponse.data.path_from_root.map((catList) => catList.name) : []
        ));
      });
    });
  } else {
    response.end();
  }
};

export default handleGetItem;
