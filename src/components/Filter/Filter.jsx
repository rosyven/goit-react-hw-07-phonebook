import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from './filterSlice';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
    return (
        <label>
            Find contacts by name:
            <input
                type="text"
                value={filter}
                name="filter"
                onChange={handleFilterChange}
            />
        </label>
    );
};
export default Filter;