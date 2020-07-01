import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import ResultsList from './ResultsList';
import { searchApi } from '../services';
import withSearch from './withSearch';
import SEO from './SEO';

const SearchResults = (props) => {
  const query = props.searchParams.get('search');
  useEffect(() => {
    if (isEmpty(props.results)) {
      searchApi(query).then((response) => {
        props.updateState({ searchResults: response.data })
      }).catch((e) => {
        if (e.response.status === 404) {
          props.history.push('/no-hay-resultados-para-esta-busqueda')
          props.updateState({ searchResults: {}, item: {} });
        } else {
          props.history.push('/error')
          props.updateState({ searchResults: {}, item: {} });
        }
      });
    }
  }, []);

  if (isEmpty(props.results)) {
    return 'Loading';
  }

  return (<>
    <SEO title={`Resultados de "${query}" | MercadoLibre`} />
    <ResultsList results={props.results} />
  </>)
};

export default withSearch(SearchResults);
