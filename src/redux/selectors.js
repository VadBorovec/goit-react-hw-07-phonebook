import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.items;
export const getFilter = state => state.filter;

export const visibleContacts = createSelector(
  [selectContact, getFilter],
  (contacts, filter) => {
    return contacts.filter(e =>
      e.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);
