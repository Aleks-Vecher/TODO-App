import React, { useCallback } from 'react';

const Filter = ({ sortCompleted, setSearchValue }) => {
  const setFilterDone = () => {
    sortCompleted();
  };
  const searchNameTodo = useCallback(
    (e) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue],
  );
  return (
    <form>
      <input type="checkbox" onClick={setFilterDone} /> Done
      <input
        type="text"
        placeholder="Search by name"
        onChange={searchNameTodo}
      />
    </form>
  );
};
export default Filter;
