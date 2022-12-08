import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operations';

const contactData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  // reducers: {
  //   addContact(state, action) {
  //     const contact = action.payload;
  //     if (
  //       state.contacts.filter(
  //         element => element.name.toLowerCase() === contact.name.toLowerCase()
  //       ).length > 0
  //     ) {
  //       return Notiflix.Notify.warning(
  //         `${contact.name} is already in contacts`
  //       );
  //     }
  //     state.contacts = [...state.contacts, contact];
  //   },
  //   deleteContact(state, action) {
  //     const id = action.payload;
  //     state.contacts = state.contacts.filter(contact => contact.id !== id);
  //   },
  //   setFilter(state, action) {
  //     state.filter = action.payload;
  //   },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const id = action.payload;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
