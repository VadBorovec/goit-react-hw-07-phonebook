import { Container, Section } from 'components/ui';
// import {
//   ContactFilter,
//   ContactForm,
//   ContactList,
//   ContactStats,
// } from 'components';

// import { useSelector } from 'react-redux';
// import { selectContact } from 'redux/selectors';
import { useFetchContactsQuery } from 'redux/rtkQuery';
import { Spinner, ContactForm, ContactFilter, ContactList } from 'components';

export const App = () => {
  // const contacts = useSelector(selectContact);
  const { data: contacts, isFetching } = useFetchContactsQuery();
  console.log(contacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
        {isFetching && <Spinner />}
        {/* {contacts && <ContactList contacts={contacts} />} */}

        {/* <ContactFilter /> */}
        {/* <ContactStats /> */}

        {contacts && <ContactList contacts={contacts} />}
      </Section>
    </Container>
  );
};
