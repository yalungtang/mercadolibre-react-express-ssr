import React, { useState } from 'react';

const SearchBar = (props) => {
  const [inputValue, updateInput] = useState('');

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
      <input onChange={handleOnChange} value={inputValue} type="text" onKeyDown={handleKeyDown}/>
    </div>
  );
};

export default SearchBar;
