import { ContactList } from 'components';
import { useFetchContactsQuery } from 'redux/contacts';

export const ContactsPage = () => {
  const { data, isFetching } = useFetchContactsQuery();

  return <div>{data && <ContactList contacts={data} />}</div>;
};
