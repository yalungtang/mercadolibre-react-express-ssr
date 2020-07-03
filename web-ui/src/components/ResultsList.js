import React from 'react';
import { isEmpty } from 'lodash';
import ListElement from './ListElement';

const ResultsList = (props) => {
  const { results } = props; 
  if (isEmpty(results)) {
    return 'No results';
  }
  return (
    <>{results.items.map((item) => {
      return <ListElement {...item} />
    })}</>
  )
};

export default ResultsList;
