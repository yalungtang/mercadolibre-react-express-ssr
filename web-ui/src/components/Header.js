import React from 'react';
import SearchBar from './SearchBar';
import Logo from './Logo';

const Header = (props) => {
  return (
    <div className="header-bar"><Logo/><SearchBar {...props} /></div>
  )
};

export default Header;
