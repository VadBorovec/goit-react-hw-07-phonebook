import { ContactItem } from 'components';
import { Text } from 'components/ui';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts && contacts.length === 0 ? (
        <Text textAlign="center">There are no any numbers...</Text>
      ) : (
        <>
          {contacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
        </>
      )}
    </List>
  );
};

// !=============
// import { useSelector } from 'react-redux';
// import { visibleContacts } from 'redux/selectors';

// export const ContactList = () => {
//   const contacts = useSelector(visibleContacts);

//   return (
// <List>
//   {todos.map(({ id, name, phone }) => (
//     <ContactItem id={id} name={name} phone={phone} />
//   ))}
// </List>;
//   );
// };
