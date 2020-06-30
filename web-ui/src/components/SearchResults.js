import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import ResultsList from './ResultsList';
import { searchApi } from '../services';

const SearchResults = (props) => {
  useEffect(() => {
    if (isEmpty(props.results)) {
      const query = props.searchParams.get('search');
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

  return (<ResultsList results={props.results} />)
};

export default SearchResults;
