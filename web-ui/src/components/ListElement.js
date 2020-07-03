import React from 'react';
import { Link } from 'react-router-dom';

const ListElement = (props) => {
  const { id, title } = props;
  return (
    <article className="product-list__element">
      <Link to={`/items/${id}`}>{title}</Link>
    </article>
  )
};

export default ListElement;
