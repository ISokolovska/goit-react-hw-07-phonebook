import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

const store = configureStore({
  reducer: { contactsData: contactsReducer },
});

export default store;
