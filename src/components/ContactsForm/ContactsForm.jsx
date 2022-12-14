import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import {
  AddContactsFormContainer,
  AddContactsInput,
  Button,
  ButtonText,
  Formlabel,
} from './Styled';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    }
    if (evt.target.name === 'phone') {
      setPhone(evt.target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name,
      phone,
    };
    if (
      contacts.filter(
        element => element.name.toLowerCase() === contact.name.toLowerCase()
      ).length > 0
    ) {
      return Notiflix.Notify.warning(`${contact.name} is already in contacts`);
    }
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <AddContactsFormContainer onSubmit={handleSubmit}>
      <Formlabel>Name</Formlabel>
      <AddContactsInput
        type="text"
        name="name"
        onChange={handleChange}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Formlabel htmlFor="phone">Phone</Formlabel>
      <AddContactsInput
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">
        <ButtonText>Add</ButtonText>
      </Button>
    </AddContactsFormContainer>
  );
};
