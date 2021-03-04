import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import style from './EditTodo.css';

const EditTodo = ({
  editTodoItem,
  setTextarea,
  setInput,
  saveTodoItem,
  cancelTodoItem,
  toggleDoneTodo,
}) => {
  const history = useHistory();

  const setTextareaValue = useCallback(
    (e) => {
      setTextarea(e.target.value);
    },
    [setTextarea],
  );

  const setInputValue = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [setInput],
  );

  const saveTodo = () => {
    saveTodoItem();
    history.push(`/category/${editTodoItem.id}`);
  };

  const cancelTodo = () => {
    cancelTodoItem();
    history.push(`/category/${editTodoItem.id}`);
  };

  const toggleDone = useCallback(
    (e) => {
      toggleDoneTodo(e.target.checked);
    },
    [toggleDoneTodo],
  );

  return (
    <form>
      <div>
        <button className={style.save} type="button" onClick={saveTodo}>
          Save Changes
        </button>
        <button className={style.cancel} type="button" onClick={cancelTodo}>
          Cancel
        </button>
      </div>
      <h4>Name: {editTodoItem.nameTodo}</h4>
      <input
        type="checkbox"
        onChange={toggleDone}
        checked={editTodoItem.completed}
      />
      Done
      <div>
        <input
          className={style.input}
          value={editTodoItem.nameTodo}
          type="text"
          onChange={setInputValue}
        />
      </div>
      <div>
        <textarea
          className={style.textarea}
          placeholder="Description"
          value={editTodoItem.description}
          onChange={setTextareaValue}
        >
          {editTodoItem.description}
        </textarea>
      </div>
    </form>
  );
};

export default EditTodo;
