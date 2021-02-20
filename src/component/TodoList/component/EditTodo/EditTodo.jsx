import React, { useCallback } from 'react';

const EditTodo = ({
  editTodoItem,
  setTextarea,
  setInput,
  editTodoToggle,
  saveTodoItem,
  cancelTodoItem,
  toggleDoneTodo,
}) => {
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

  const saveTodo = useCallback(() => {
    editTodoToggle();
    saveTodoItem();
  }, [editTodoToggle, saveTodoItem]);

  const cancelTodo = useCallback(() => {
    editTodoToggle();
    cancelTodoItem();
  }, [editTodoToggle, cancelTodoItem]);

  const toggleDone = useCallback(
    (e) => {
      toggleDoneTodo(e.target.checked);
    },
    [toggleDoneTodo],
  );

  return (
    <form>
      <div>
        <button type="button" onClick={saveTodo}>
          Save Changes
        </button>
        <button type="button" onClick={cancelTodo}>
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
          value={editTodoItem.nameTodo}
          type="text"
          onChange={setInputValue}
        />
      </div>
      <div>
        <textarea
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
