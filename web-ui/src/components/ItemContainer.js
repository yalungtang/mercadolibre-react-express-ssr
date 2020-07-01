import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { getItem } from '../services';
import Item from './Item';

const ItemContainer = (props) => {
  useEffect(() => {
    if (props.item && props.match.params.id !== props.item.id) {
      const { id } = props.match ? props.match.params : {};
      getItem(id).then((response) => props.updateState({ item: response.data.item }));
    }
  }, []);

  if (isEmpty(props.item) || props.match.params.id !== props.item.id) {
    return 'Loading';
  }

  return (
    <Item {...props.item} />
  )
};

export default ItemContainer;
