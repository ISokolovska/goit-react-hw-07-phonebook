import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';
import { FilterContacts, FilterText } from './Styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const setFilterContacts = event => {
    const { value } = event.target;
    dispatch(filterContact(value));
  };

  return (
    <label htmlFor="filter">
      <FilterText>Find contacts by name</FilterText>
      <FilterContacts
        type="text"
        id="filter"
        value={filter}
        onChange={setFilterContacts}
      />
    </label>
  );
};
