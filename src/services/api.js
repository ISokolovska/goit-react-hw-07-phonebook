import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6391cb6eac688bbe4c52c11a.mockapi.io';

export const getContactsApi = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const addContactApi = createAsyncThunk(
  'contacts/addContact',
  async () => {
    const response = await axios.post('/contacts');
    return response.data;
  }
);

export const deleteContactApi = createAsyncThunk(
  'contacts/addContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  }
);
