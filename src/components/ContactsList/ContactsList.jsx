import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import { Button } from '../ContactsForm/Styled';
import { Contact, ContactsWrapper } from './Styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };
  const filteredContacts = onFilterContacts();

  return (
    <ContactsWrapper className="contacts-list">
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact>
              {contact.name}: {contact.phone}
            </Contact>
            <Button
              type="submit"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ContactsWrapper>
  );
};
