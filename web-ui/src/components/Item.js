import React from 'react';
import withSearch from './withSearch';
import SEO from './SEO';
import Breadcrumbs from './Breadcrumbs';
import Price from './Price';

const conditionMap = {
  new: 'Nuevo',
  used: 'Usado'
};

const Item = (props) => {
  if (props.isLoading) {
    return "is loading";
  }
  const { item: { title, id, categories, condition, sold_quantity, price, picture, description } } = props;
  const handleBuy = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <SEO title={title} canonicalUrl={`items/${id}`} />
      <Breadcrumbs categories={categories} />
      <div className="page-box">
        <article className="grid item">
          <div className="item__content width-12/12 width-9/12@m">
            <img src={picture} />
            <div className="item__description_tile">
              Descripcion del producto
            </div>
            <div className="item__description_tile">
              {description}
            </div>
          </div>
          <div className="item__sidebar width-12/12 width-3/12@m">
            <div className="item_stats">
              {conditionMap[condition]} - {sold_quantity} vendidos
            </div>
            <div className="item_title">
              {title}
            </div>
            <div className="item_price">
              <Price {...price} />
            </div>
            <button onClick={handleBuy} className="button-primary">
              Comprar
            </button>
          </div>
        </article>
      </div>
    </>
  );
};

export default withSearch(Item);
