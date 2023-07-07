export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <h3>
            <strong>Name:</strong>
            {name}
          </h3>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
        </li>
      ))}
    </ul>
  );
};

// import PropTypes from 'prop-types';
// import { ContactItem } from 'components';
// import { List, Item } from './ContactList.styled';
// import { useSelector } from 'react-redux';
// import { visibleContacts } from 'redux/selectors';

// export const ContactList = () => {
//   const contacts = useSelector(visibleContacts);

//   return (
//     <List>
//       {contacts.map(({ id, name, number }) => (
//         <Item key={id}>
//           <ContactItem id={id} name={name} number={number} />
//         </Item>
//       ))}
//     </List>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
