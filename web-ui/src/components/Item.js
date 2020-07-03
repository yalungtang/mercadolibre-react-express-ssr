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
    console.log('Buy', id);
  }
  return (
    <>
      <SEO title={title} canonicalUrl={`items/${id}`} />
      <Breadcrumbs categories={categories} />
      <div className="page-box">
        <article className="grid item">
          <div className="item__content width-12/12 width-9/12@m">
            <div className="item__picture_container">
              <img className="item__picture" src={picture} />
            </div>
            <div className="item__description">
              <div className="item__description_title">
                Descripcion del producto
            </div>
              {description}
            </div>
          </div>
          <div className="item__sidebar width-12/12 width-3/12@m">
            <div className="item__stats">
              {conditionMap[condition]} - {sold_quantity} vendidos
            </div>
            <div className="item__title">
              {title}
            </div>
            <div className="item__price">
              <Price {...price} />
            </div>
            <a href="#" onClick={handleBuy} className="button__primary">
              Comprar
            </a>
          </div>
        </article>
      </div>
    </>
  );
};

export default withSearch(Item);
