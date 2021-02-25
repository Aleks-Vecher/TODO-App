import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './AddCategory.css';

const AddCategory = ({ addCategory }) => {
  const textInput = React.createRef();
  useEffect(() => textInput.current.focus());

  const onSubmit = (e) => {
    e.preventDefault();
    if (textInput.current.value.length) {
      addCategory(textInput.current.value, Date.now());
    } else {
      alert('Please Enter Category Title');
    }
    textInput.current.value = '';
    textInput.current.focus();
  };
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        className={style.input}
        ref={textInput}
        type="text"
        placeholder="Enter Category title"
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
