import PropTypes from 'prop-types';
import { Box, Text } from './ContactStats.styled';
import { useSelector } from 'react-redux';
import { selectContact } from 'redux/selectors';

export const ContactStats = () => {
  const contacts = useSelector(selectContact);

  const totalContactCount = contacts.length;

  return (
    <Box>
      <Text>Total contacts: {totalContactCount}</Text>
    </Box>
  );
};

ContactStats.propTypes = {
  totalContactCount: PropTypes.number.isRequired,
};
