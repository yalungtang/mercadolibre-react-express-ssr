import React from 'react';
import withSearch from './withSearch';

const Breadcrumbs = (props) => {
  const { categories } = props;
  if (!categories || !categories.length) {
    return null;
  }
  return (
    <div className="breadcrumbs">
      {
        categories.map(
          (category, index) => (
            <span className="single-breadcrumb">
              {category} {index !== props.categories.length - 1 && '> '}
            </span>
          )
        )
      }
    </div>
  )
};

export default Breadcrumbs;
