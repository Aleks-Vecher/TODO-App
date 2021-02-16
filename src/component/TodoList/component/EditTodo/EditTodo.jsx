import React from 'react';

const EditTodo = ({ editTodoNew, editTodoItem }) => (
  <>
    <div>
      <button type="button" onClick={editTodoNew}>
        Save Changes
      </button>
      <button type="button" onClick={editTodoNew}>
        Cancel
      </button>
    </div>
    <h3>{editTodoItem.nameTodo}</h3>
    <input type="checkbox" />
    <input value={editTodoItem.nameTodo} type="text" />
    <textarea value={editTodoItem.description}>
      {editTodoItem.description}
    </textarea>
  </>
);

export default EditTodo;
