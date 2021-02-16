import React from 'react';

const Todo = ({ nameTodo, editTodoNew, id }) => (
  <li key={nameTodo}>
    <div className="row">
      <div className="col-8">
        <input type="checkbox" />
        <span>{nameTodo}</span>
      </div>
      <div className="col-4">
        <button type="button" id={id} onClick={editTodoNew}>
          edit
        </button>
      </div>
    </div>
  </li>
);

export default Todo;
