import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SearchIcon from './SearchIcon';
import { isEmpty } from 'lodash';

const SearchBar = (props) => {
  const [inputValue, updateInput] = useState('');

  useEffect(() => {
    if (!isEmpty(props.search)) {
      updateInput(props.search);
    }
  }, props.search);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.length) {
      props.triggerSearch(inputValue)
    }
  }

  const handleOnChange = (e) => {
    updateInput(e.target.value);
  };

  return (
    <div className="search-bar">
      <Link style={{ height: 36 }} to="/">
        <Logo />
      </Link>
      <form className="nav-search" onSubmit={(e) => e.preventDefault()}>
        <input placeholder={'Nunca dejes de buscar'} onChange={handleOnChange} value={inputValue} type="text" onKeyDown={handleKeyDown} />
        <button type="submit" onClick={() => props.triggerSearch(inputValue)}><SearchIcon /></button>
      </form>
    </div>
  );
};

export default SearchBar;
