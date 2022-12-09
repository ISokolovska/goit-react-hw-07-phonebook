import axios from 'axios';

axios.defaults.baseURL = 'https://6391cb6eac688bbe4c52c11a.mockapi.io';

export const getContactsApi = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContactApi = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContactApi = async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
};
