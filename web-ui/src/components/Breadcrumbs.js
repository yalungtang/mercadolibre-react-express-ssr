import React from 'react';
import withSearch from './withSearch';

const Breadcrumbs = (props) => {
  const { categories } = props;
  return (
    <div className="breadcrumbs">
      {
        categories.map(
          (category, index) => (
            <span className="single-breadcrumb">
              {category} {index !== props.categories.length && '> '}
            </span>
          )
        )
      }
    </div>
  )
};

export default Breadcrumbs;
