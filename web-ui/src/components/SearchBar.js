import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [inputValue, updateInput] = useState('');
  let history = useHistory();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.length) {
      history.push(`/items?search=${inputValue}`);
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
