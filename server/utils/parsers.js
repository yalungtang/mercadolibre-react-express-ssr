import { author } from '../constants';
import { isEmpty } from 'lodash';

const parseSingleItem = (rawItem) => {
  const {
    id,
    title,
    price,
    currency_id: currency,
    thumbnail: picture,
    condition,
    shipping: {
      free_shipping
    },
    address
  } = rawItem;

  const pricePair = price.toString().split('.');

  return ({
    id,
    title,
    price: {
      currency,
      amount: parseInt(pricePair[0]),
      decimals: pricePair[1] ? parseInt(pricePair[1]) : 0
    },
    picture,
    condition,
    free_shipping
  })
};

export const parseSearchResponse = (response) => {
  const items = response.results
    .map((item) => ({ ...parseSingleItem(item), address: item.address.state_name }));
  const categoryFilter = response.filters.find((filter) => filter.id === 'category');

  return {
    author,
    categories: !isEmpty(categoryFilter) ? categoryFilter.values[0].path_from_root.map((cat) => cat.name) : [],
    items
  }
};

export const parseItemResponse = (itemResponse) => {
  const {
    sold_quantity,
  } = itemResponse;
  return (
    {
      author,
      item: {
        ...parseSingleItem(itemResponse),
        sold_quantity
      }
    }
  );
};
