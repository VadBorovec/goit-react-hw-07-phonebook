import PropTypes from 'prop-types';
import { Button } from 'components/ui';
import { Name, Number } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(remove(id));

  return (
    <>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
