import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import Header from './Header';
import { searchApi } from '../services';

const SearchResults = (props) => {
  const [results, updateResults] = useState({});
  useEffect(() => {
    const query = props.searchParams.get('search');
    searchApi(query).then((response) => updateResults(response.data));
  }, []);
  const { author, categories, items } = results;

  if (isEmpty(results)) {
    return 'Loading';
  }

  if (!isEmpty(results) && isEmpty(items)) {
    return 'No results';
  }

  return (
    <>{items.map((item) => {
      return <div>{item.title}</div>
    })}</>
  )
};

export default SearchResults;
