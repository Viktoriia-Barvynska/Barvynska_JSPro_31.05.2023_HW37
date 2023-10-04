import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contacts: []
}

export const contact = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    displayContacts: (state, action) => {
      state.contacts = action.payload;
  },
    deleteContact: (state, action) => {
    state.contacts = state.contacts.filter(
      (contact) => contact.id !== action.payload
    );
  },
    addContact: (state, action) => {
    const newId = Math.floor(Math.random() * 10000);
    const newContact = { ...action.payload, id: newId };
    state.contacts.push(newContact);
  },
    updateContact: (state, action) => {
    const { id } = action.payload;
    const contactIndex = state.contacts.findIndex((contact) => contact.id === id);
    if (contactIndex !== -1) {
     state.contacts[contactIndex] = action.payload;
  
    }}

}})

export const { displayContacts, deleteContact, addContact, updateContact } =
  contact.actions;

export default contact.reducer;
