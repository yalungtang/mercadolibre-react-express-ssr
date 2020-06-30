import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Search from './Search';
import SearchResults from './SearchResults';
import Item from './Item';

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
        <Search triggerSearch={handleSearch} />
      </Route>
      <Route exact path="/no-hay-resultados-para-esta-busqueda">
        No hay resultados para esta busqueda
      </Route>
      <Route exact path="/error">
        Error
      </Route>
      <Route exact path="/items/:id">
        <Item item={initial.item} updateState={handleUpdateState} />
      </Route>
      <Route path="/items">
        <SearchResults history={history} updateState={handleUpdateState} searchParams={query} results={initial.searchResults} />
      </Route>
    </Switch>
  )
};

export default App;
