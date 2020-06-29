import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import ResultsList from './ResultsList';
import { searchApi } from '../services';

const SearchResults = (props) => {
  const [results, updateResults] = useState({});

  useEffect(() => {
    if (isEmpty(props.results)) {
      const query = props.searchParams.get('search');
      searchApi(query).then((response) => {
        props.updateInitial({ searchResults: response.data })
      });
    } else {
      updateResults(props.results);
    }
  }, []);

  if (isEmpty(results) && isEmpty(props.results)) {
    return 'Loading';
  }

  return (<ResultsList results={!isEmpty(results) ? results : props.results} />)
};

export default SearchResults;
