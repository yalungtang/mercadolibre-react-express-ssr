import React from 'react';
import withSearch from './withSearch';
import SEO from './SEO';

const Item = (props) => {
  return (
    <div className="item">
      <SEO title={props.title} canonicalUrl={`items/${props.id}`} />
      {props.title}
    </div>
  );
};

export default withSearch(Item);
