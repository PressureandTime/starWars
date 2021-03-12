import React from 'react';
import { SearchBoxStyledComponent } from './SearchBoxStyles';

export const SearchBox = ({ onSearchChange }) => (
  <SearchBoxStyledComponent
    type="search"
    placeholder="search characters"
    onChange={onSearchChange}
  />
);
