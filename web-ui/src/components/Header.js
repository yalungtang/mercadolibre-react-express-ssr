import React from 'react';
import SearchBar from './SearchBar';

const Header = (props) => {
  return (
    <div className="header-bar"><SearchBar {...props} /></div>
  )
};

export default Header;
