import React from 'react';
import CardListComponent from './CardListStyles';

import { Card } from '../card/card.component';

export const CardList = ({characters}) => {
  return (
    <CardListComponent>
      {characters.map((char) => (
        <Card key={char.name} character={char} />
      ))}
    </CardListComponent>
  );
};
