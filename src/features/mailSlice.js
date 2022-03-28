import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  composeMessage: false,
  selectedMail: null,
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload
    },
    openComposer: (state) => {
      state.composeMessage = true;
    },
    closeComposer: (state) => {
      state.composeMessage = false;
    },
  },
}); 

export const { selectMail, openComposer, closeComposer } = mailSlice.actions;

export const selectComposeMessage = (state) => state.mail.composeMessage;

export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
