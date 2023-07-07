import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64a87027dca581464b85bc9f.mockapi.io/api/v1',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: ({ contactName, contactPhone }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: contactName,
          phone: contactPhone,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} = contactsApi;

// !==========
// import { createSlice } from '@reduxjs/toolkit';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: [] },
//   reducers: {
//     add(state, action) {
//       state.items.push(action.payload);
//     },
//     remove(state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const { add, remove } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
