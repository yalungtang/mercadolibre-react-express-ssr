import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import ResultsList from './ResultsList';
import withSearch from './withSearch';
import SEO from './SEO';

const SearchResults = (props) => {
  if (isEmpty(props.results)) {
    return 'Loading';
  }

  return (<>
    <SEO title={`Resultados de "${props.query}" | MercadoLibre`} />
    <ResultsList results={props.results} />
  </>)
};

export default withSearch(SearchResults);
