import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { getItem } from '../services';

const Item = (props) => {
  useEffect(() => {
    if (props.match.params.id !== props.item.id) {
      const { id } = props.match ? props.match.params : {};
      getItem(id).then((response) => props.updateState({ item: response.data.item }));
    }
  }, []);

  if (isEmpty(props.item) || props.match.params.id !== props.item.id) {
    return 'Loading';
  }

  const { title } = props.item;

  return (
    <>{title}</>
  )
};

export default withRouter(Item);
