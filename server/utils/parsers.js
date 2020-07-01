import { author } from '../constants';

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
    }
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
  const items = response.results.map((item) => parseSingleItem(item));
  const categories = response.available_filters[0].values.map((category) => category.name);

  return {
    author,
    categories,
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
