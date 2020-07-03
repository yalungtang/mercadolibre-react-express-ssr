import React from 'react';
import { isEmpty } from 'lodash';
import ListElement from './ListElement';
import Breadcrumbs from './Breadcrumbs';

const ResultsList = (props) => {
  const { results } = props;
  if (isEmpty(results)) {
    return 'No results';
  }
  return (
    <>
      <Breadcrumbs categories={results.categories} />
      <div className="page-box">
        {results.items.map((item) => {
          return <ListElement {...item} />
        })}
      </div>
    </>
  )
};

export default ResultsList;
