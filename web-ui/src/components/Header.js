import React from 'react';
import SearchBar from './SearchBar';

const Header = (props) => {
  return (
    <header className="header grid">
      <div className="grid__item width-12/12 width-1/12@m">
      </div>
      <div className="grid__item width-12/12 width-10/12@m">
        <SearchBar {...props} />
      </div>
      <div className="grid__item width-12/12 width-1/12@m">
      </div>
    </header>
  )
};

export default Header;
