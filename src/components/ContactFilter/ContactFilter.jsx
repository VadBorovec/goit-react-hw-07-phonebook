import { filtered } from 'redux/filterSlice';
import { Filter, Label, Input } from './ContactFilter.styled';
import { useDispatch } from 'react-redux';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(filtered(e.target.value));

  return (
    <Filter>
      <Label>
        Filter
        <Input
          type="text"
          name="filter"
          placeholder="Enter name"
          onChange={handleFilter}
        />
      </Label>
    </Filter>
  );
};
