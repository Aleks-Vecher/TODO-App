import React, { useEffect, useState, useCallback } from 'react';
import style from './AddTodo.css';

const AddTodo = ({ categories, addTodo }) => {
  const textInput = React.createRef();
  useEffect(() => textInput.current.focus());

  const [todo, setTodo] = useState('');
  const onTodoChange = (e) => setTodo(e.target.value);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (todo.length) {
        if (categories && !categories.subCategories) {
          addTodo(
            todo,
            categories.nameCategory,
            categories.id,
            categories.nameSubCategory,
            Date.now(),
          );
        } else {
          alert('Please Enter and Choose Category or SubCategory');
        }
      } else {
        alert('Please Enter TodoItems');
      }
      setTodo('');
      textInput.current.focus();
    },
    [addTodo, categories, todo, textInput],
  );

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        className={style.input}
        ref={textInput}
        type="text"
        placeholder="Enter Todo Name"
        value={todo}
        onChange={onTodoChange}
      />
      <button className={style.button} type="submit">
        ADD
      </button>
    </form>
  );
};

export default AddTodo;
