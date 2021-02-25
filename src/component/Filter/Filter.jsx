import React, { useCallback } from 'react';
import style from './Filter.css';

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
    <form className={style.form}>
      <input type="checkbox" onClick={setFilterDone} />
      <p className={style.text}>Done</p>
      <input
        className={style.filter}
        type="text"
        placeholder="Search by name"
        onChange={searchNameTodo}
      />
    </form>
  );
};
export default Filter;
