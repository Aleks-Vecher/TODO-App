import React, { useEffect } from 'react';
import style from './AddTodo.css';

const AddTodo = ({ categories, addTodo }) => {
  const textInput = React.createRef();
  useEffect(() => textInput.current.focus());

  const onSubmit = (e) => {
    e.preventDefault();
    if (textInput.current.value.length) {
      if (categories && !categories.subCategories) {
        addTodo(
          textInput.current.value,
          categories.nameCategory,
          categories.id,
          categories.nameSubCategory,
          Date.now(),
        );
      } else {
        alert('Please Enter and Choose Category or SubCategory');
      }
    } else {
      alert('Please Enter Todo');
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
        placeholder="Enter Todo Title"
      />
      <button className={style.button} type="submit">
        ADD
      </button>
    </form>
  );
};

export default AddTodo;
