import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import style from './AddCategory.css';

const AddCategory = ({ addCategory }) => {
  const textInput = React.createRef();
  useEffect(() => textInput.current.focus());

  const [category, setCategory] = useState('');
  const onCategoryChange = (e) => setCategory(e.target.value);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (category.length) {
        addCategory(category, Date.now());
      } else {
        alert('Please Enter Category Title');
      }
      setCategory('');
      textInput.current.focus();
    },
    [category, addCategory, textInput],
  );

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        className={style.input}
        ref={textInput}
        type="text"
        placeholder="Enter Category Title"
        value={category}
        onChange={onCategoryChange}
      />
      <button className={style.button} type="submit">
        ADD
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default AddCategory;
