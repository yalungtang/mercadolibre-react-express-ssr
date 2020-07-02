import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Home from './Home';
import SearchResults from './SearchResults';
import ItemContainer from './ItemContainer';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const App = (props) => {
  let history = useHistory();
  let query = useQuery();
  const [initial, updateInitial] = useState({ ...props });

  const handleSearch = (value) => {
    history.push(`/items?search=${value}`);
    updateInitial({ item: {}, searchResults: {} });
  };

  const handleUpdateState = (update) => {
    updateInitial({ ...initial, ...update });
  };

  return (
    <Switch>
      <Route exact path="/">
        <Home triggerSearch={handleSearch} />
      </Route>
      <Route
        exact
        path="/items/:id"
        render={
          (renderProps) => <ItemContainer {...renderProps} item={initial.item} triggerSearch={handleSearch} updateState={handleUpdateState} />
        }
      />
      <Route path="/items">
        <SearchResults triggerSearch={handleSearch} history={history} updateState={handleUpdateState} searchParams={query} results={initial.searchResults} />
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
