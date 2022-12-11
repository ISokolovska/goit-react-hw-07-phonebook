import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { TitleContacts } from './Styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        width: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: 'black',
        backgroundColor: '#896e69',
        border: '5px solid #003b46',
        borderRadius: 50,
      }}
    >
      <h1>Phonebook</h1>
      <ContactsForm />

      {isLoading && !error && <b>Request in progress...</b>}
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactsList />
    </div>
  );
};
