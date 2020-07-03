import React from 'react';
import ResultsList from './ResultsList';
import withSearch from './withSearch';
import SEO from './SEO';

const SearchResults = (props) => {
  return (<>
    <SEO title={`Resultados de "${props.search}" | MercadoLibre`} />
    <ResultsList results={props.results} />
  </>)
};

export default withSearch(SearchResults);
