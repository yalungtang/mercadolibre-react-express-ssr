import React from 'react';
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
    let query = useQuery();
    return (
        <Switch>
            <Route exact path="/">
                <Search />
            </Route>
            <Route path="/items:id">
                <Item />
            </Route>
            <Route path="/items">
                <SearchResults searchParams={query} />
            </Route>
        </Switch>
    )
};

export default App;
