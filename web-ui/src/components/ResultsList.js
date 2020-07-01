import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

const ResultsList = (props) => {
  const { results } = props; 
  if (isEmpty(results)) {
    return 'No results';
  }
  return (
    <>{results.items.map((item) => {
      return <div><Link to={`/items/${item.id}`}>{item.title}</Link></div>
    })}</>
  )
};

export default ResultsList;
