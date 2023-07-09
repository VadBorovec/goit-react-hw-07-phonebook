// import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCreateContactMutation } from '../../redux/contacts/contactsSlice';
import { Spinner } from '../Spinner';

export const CreateTodo = () => {
  const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const contactName = e.currentTarget.elements.name.value;
    const contactPhone = e.currentTarget.elements.phone.value;
    createContact({
      contactName,
      contactPhone,
    });
    e.currentTarget.reset();

    toast.success('Заметка создана!');
  };

  return (
    <>
      {/* {isSuccess && <Navigate replace to="/todos" />} */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="phone" name="phone" />
        <button type="submit" disabled={isLoading}>
          {isLoading && <Spinner size={12} />}
          Create
        </button>
      </form>
    </>
  );
};
