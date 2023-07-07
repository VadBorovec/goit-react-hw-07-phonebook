import { Spinner } from 'components';
import { Button } from 'components/ui';
import { Name, Number } from './ContactItem.styled';

import { useDeleteContactsMutation } from 'redux/contacts';

export const ContactItem = ({ id, name, phone }) => {
  // const [deleteContact, { isLoading: isDeleting }] =
  //   useDeleteContactsMutation();

  return (
    <>
      <Name>{name}</Name>
      <Number>{phone}</Number>
      {/* <Button onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting && <Spinner size={12} />}
        Delete
      </Button> */}
    </>
  );
};
