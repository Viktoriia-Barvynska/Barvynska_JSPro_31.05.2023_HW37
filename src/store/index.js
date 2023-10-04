import { configureStore } from '@reduxjs/toolkit';

import modal from '../store/reducers/modal';
import contact from '../store/reducers/contacts';

 const store = configureStore({
  reducer: {
    modal: modal,
    contacts: contact,
  },
})

export default store;