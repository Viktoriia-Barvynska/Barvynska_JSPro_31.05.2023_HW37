import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    show: false,
    contactIdToDelete: null,   
}


const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.show = true;
      state.contactIdToDelete = action.payload;
    },
    hideModal: (state) => {
      state.show = false;
      state.contactIdToDelete = null;
    },
  },
});

export const { showModal, hideModal } = modal.actions;

export default modal.reducer;






