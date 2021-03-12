import React, { useState, useEffect } from 'react';
import moment from 'moment';

import CustomDialog from '../Modal';
import {
  StyledCardComponent,
  StyledCardChild,
  StyledCardChild2,
  StyledCardChild3,
} from './CardStyles';

export const Card = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchAll = () => {
      let films = character.films;

      Promise.all(films.map((u) => fetch(u)))
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          setMovies(data);
        })
        .catch(() => setShowError(true));
    };

    fetchAll();
  }, [character]);

  return (
    <>
      {showError ? <h2>Something went wrong</h2> : null}
      <StyledCardComponent onClick={handleDialogOpen}>
        <StyledCardChild>
          <h2> {character.name} </h2>
        </StyledCardChild>

        <StyledCardChild2>
          <p>{character.films.length} films </p>
          <p>birth year: {character.birth_year} </p>
        </StyledCardChild2>
      </StyledCardComponent>

      <CustomDialog isOpen={isOpen} handleClose={handleDialogClose} title="Star Wars Character">
        <h4> {character.name} </h4>
        <StyledCardChild3>
          <p>Height: {character.height}</p>
          <p>Gender: {character.gender}</p>
          <p>Mass: {character.mass}</p>
          <p>Hair color: {character.hair_color}</p>
          <p>Eye color: {character.eye_color}</p>
          <p>Skin color: {character.skin_color}</p>
          <p>Birth year: {character.birth_year}</p>
        </StyledCardChild3>
        <div>
          <p>{character.films.length} Films</p>
          {movies.map((movie) => (
            <p key={movie.title}>
              -{movie.title}: {moment(movie.release_date).fromNow()} ago
            </p>
          ))}
        </div>
      </CustomDialog>
    </>
  );
};
