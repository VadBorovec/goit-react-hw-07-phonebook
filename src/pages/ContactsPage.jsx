import { ContactList, Spinner } from 'components';
import { useFetchContactsQuery } from 'redux/contacts';

export const ContactsPage = () => {
  const { data, isFetching } = useFetchContactsQuery();

  return (
    <div>
      {isFetching && <Spinner />}
      {data && <ContactList contacts={data} />}
    </div>
  );
};
