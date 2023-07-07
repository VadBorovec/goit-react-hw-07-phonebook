import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { add, remove } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// !========111!!!!=======
// const contactsSlice2 = creatSlice({
//   name: 'contacts',
//   initialState: { items: [], filter: '', isLoading: false, error: null },
//   reducers: {
//     [fetchContact.fulfilled]: (state, { payload }) => {
//       state.items = payload;
//       state.isLoading = false;
//     },
//     [fetchContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [fetchContact.error]: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },
//     [addContact.fulfilled]: (state, { payload }) => {
//       state.items = [...state.items, payload];
//       state.isLoading = false;
//     },
//     [addContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [addContact.error]: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },
//     [deleteContact.fulfilled]: (state, { payload }) => {
//       state.items = state.items.filter(({ id }) => id !== payload);
//       state.isLoading = false;
//     },
//     [deleteContact.pending]: state => {
//       state.isLoading = true;
//     },
//   },
// });
