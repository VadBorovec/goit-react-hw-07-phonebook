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
