import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactApi, deleteContactApi, getContactsApi } from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await getContactsApi();
      console.log(contacts);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactObj, thunkAPI) => {
    try {
      const contacts = await addContactApi();
      console.log(contacts);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/addContact',
  async (id, thunkAPI) => {
    try {
      const contacts = await deleteContactApi();
      console.log(contacts);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
