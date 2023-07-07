import { Container, Section, Text } from 'components/ui';
import {
  ContactFilter,
  ContactForm,
  ContactList,
  ContactStats,
} from 'components';

// import { useSelector } from 'react-redux';
// import { selectContact } from 'redux/selectors';
import { ContactsPage } from 'pages/ContactsPage';

export const App = () => {
  // const contacts = useSelector(selectContact);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactsPage />
        {/* <ContactForm />
        <ContactFilter />
        <ContactStats />

        {contacts.length === 0 ? (
          <Text textAlign="center">There are no any numbers...</Text>
        ) : (
          <ContactList />
        )} */}
      </Section>
    </Container>
  );
};
