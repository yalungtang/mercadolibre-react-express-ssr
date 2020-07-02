import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Home from './Home';
import SearchResults from './SearchResults';
import ItemContainer from './ItemContainer';
import { searchApi } from '../services';

const App = (props) => {
  let history = useHistory();
  const [state, updateState] = useState({ ...props });

  const handleSearch = (value) => {
    history.push(`/items?search=${value}`);
    updateState({ searchParams: value, searchResults: {}, item: {} });
  };

  const handleUpdateState = (update) => {
    updateState({ ...state, ...update });
  };

  useEffect(() => {
    console.log('search params', state.searchParams)
    if (state.searchParams !== props.searchParams) {
      searchApi(state.searchParams).then((response) => {
        updateState({ ...state, searchResults: response.data })
      }).catch((e) => {
        if (e.response.status === 404) {
          history.push('/no-hay-resultados-para-esta-busqueda')
          updateState({ ...state, searchResults: {}, item: {} });
        } else {
          history.push('/error')
          updateState({ ...state, searchResults: {}, item: {} });
        }
      });
    }
  }, [state.searchParams]);

  return (
    <Switch>
      <Route exact path="/">
        <Home triggerSearch={handleSearch} />
      </Route>
      <Route
        exact
        path="/items/:id"
        render={
          (renderProps) => <ItemContainer {...renderProps} item={state.item} triggerSearch={handleSearch} updateState={handleUpdateState} />
        }
      />
      <Route path="/items">
        <SearchResults triggerSearch={handleSearch} history={history} updateState={handleUpdateState} query={state.nextSearch} results={state.searchResults} />
      </Route>
      <Route exact path="/no-hay-resultados-para-esta-busqueda">
        No hay resultados para esta busqueda
      </Route>
      <Route exact path="/error">
        Error
      </Route>
    </Switch>
  )
};

export default App;
