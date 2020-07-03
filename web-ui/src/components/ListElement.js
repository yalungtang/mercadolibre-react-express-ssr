import React from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';
import ShippingIcon from './ShippingIcon';

const ListElement = (props) => {
  const { id, title, picture, price, free_shipping, address } = props;
  return (
    <article className=" product-list__element grid">
      <div className="product-list__content width-12/12 width-10/12@m">
        <div className="product-list__thumbnail">
          <Link to={`/items/${id}`}><img src={picture} /></Link>
        </div>
        <div className="product-list__details">
          <div className="product-list__price">
            <Price {...price} /> {free_shipping && <ShippingIcon />}
          </div>
          <div className="product-list__title">
            <Link to={`/items/${id}`}>{title}</Link>
          </div>
        </div>
      </div>
      <div className="product-list__address width-12/12 width-2/12@m">
        {address}
      </div>
    </article>
  )
};

export default ListElement;
