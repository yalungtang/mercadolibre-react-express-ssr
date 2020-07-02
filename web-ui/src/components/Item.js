import React from 'react';
import withSearch from './withSearch';
import SEO from './SEO';

const Item = (props) => {
  const { title, id } = props.item;
  return (
    <div className="item">
      <SEO title={title} canonicalUrl={`items/${id}`} />
      {title}
    </div>
  );
};

export default withSearch(Item);
