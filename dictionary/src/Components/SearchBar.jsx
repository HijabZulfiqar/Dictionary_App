import React, { useState } from 'react';

const SearchBar = (props) => {
  const [word, setWord] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (word.trim() === '') {
      alert('Please enter a word to search');
      return;
    }

    // Pass the word to the parent component
    props.onSubmitData(word);
    setWord('');
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="font-body"
        value={word}
        placeholder="Search a Word"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button type="submit" onClick={submitHandler}>
        <img src="./images/icon-search.svg" alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
