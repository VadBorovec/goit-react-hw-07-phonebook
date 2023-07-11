import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const visibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(e =>
      e.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);

export const selectContactsCount = createSelector(
  [selectContacts],
  contacts => {
    console.log('Calculating task count');

    return contacts.reduce((count, contact) => {
      count += 1;
      return count;
    }, 0);
  }
);
