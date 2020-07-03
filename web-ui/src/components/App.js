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
import { isEmpty } from 'lodash';

const App = (props) => {
  let history = useHistory();
  const [state, updateState] = useState({ ...props });

  const handleUpdateState = (update) => {
    updateState({ ...state, ...update });
  };

  const handleSearch = (value) => {
    if (!isEmpty(value)) {
      history.push(`/items?search=${value}`);
      handleUpdateState({ search: value });
    }
  };

  useEffect(() => {
    if(isEmpty(state.search) && !isEmpty(props.search)) {
      handleUpdateState({ search: props.search });
    }
  }, []);

  useEffect(() => {
    if (state.search !== props.search) {
      handleUpdateState({ searchResults: {} })
      searchApi(state.search).then((response) => {
        handleUpdateState({ searchResults: response.data })
      }).catch((e) => {
        if (e.response.status === 404) {
          history.push('/no-hay-resultados-para-esta-busqueda')
          handleUpdateState({ searchResults: {}, item: {} });
        } else {
          history.push('/error')
          handleUpdateState({ searchResults: {}, item: {} });
        }
      });
    }
  }, [state.search]);

  return (
    <Switch>
      <Route exact path="/">
        <Home
          triggerSearch={handleSearch}
          search={state.search}
        />
      </Route>
      <Route
        exact
        path="/items/:id"
        render={
          (renderProps) => <ItemContainer
            {...renderProps}
            item={state.item}
            search={state.search}
            triggerSearch={handleSearch}
            updateState={handleUpdateState}
          />
        }
      />
      <Route path="/items">
        <SearchResults
          triggerSearch={handleSearch}
          history={history}
          updateState={handleUpdateState}
          search={state.search}
          results={state.searchResults}
        />
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
