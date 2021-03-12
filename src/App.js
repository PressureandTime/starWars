import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [showError, setShowError] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const handleClick = () => {
    setVisibleBlogs((prevCards) => prevCards + 3);
  };

  useEffect(() => {
    const fetchCharacters = () => {
      try {
        fetch('https://swapi.dev/api/people/')
          .then((response) => response.json())
          .then((data) => setCharacters(data.results))
          .catch(() => setShowError(true));
      } catch (error) {
        setShowError(true);
      }
    };
    fetchCharacters();
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  return (
    <div className="App">
      {showError ? <h2>Something went wrong</h2> : null}
      <h1>Star Wars</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList characters={filteredCharacters.slice(0, visibleBlogs)} />

      <div style={{ display: 'flex', justifyContent: 'flexStart', paddingTop: '20px' }}>
        <Button style={{ borderRadius: '10px' }} variant="contained" onClick={handleClick}>
          Load more
        </Button>
      </div>
    </div>
  );
};

export default App;
