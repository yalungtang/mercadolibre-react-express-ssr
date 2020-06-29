import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { getItem } from '../services';

const Item = (props) => {
  console.log('item props', props)
  const [stateitem, updateStateItem] = useState({});

  useEffect(() => {
    if (isEmpty(props.item)) {
      const { id } = props.match ? props.match.params : {};
      getItem(id).then((response) => updateStateItem(response.data.item));
    } else {
      updateStateItem(props.item);
    }
  }, []);

  if (isEmpty(stateitem) && isEmpty(props.item)) {
    return 'Loading';
  }

  const { title } = !isEmpty(stateitem) ? stateitem : props.item;

  return (
    <>{title}</>
  )
};

export default withRouter(Item);
