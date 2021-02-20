import React, { useCallback } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Todo = ({ nameTodo, editTodoNew, id, completed, setDoneTodo }) => {
  const setDone = useCallback(
    (e) => {
      setDoneTodo(Number(e.target.id));
    },
    [setDoneTodo],
  );
  return (
    <li key={nameTodo}>
      <div className="row">
        <div className="col-8">
          <Link className="linkTodo" to={`/todo/${id}`}>
            <span
              role="link"
              aria-hidden="true"
              className={completed ? 'todoItem colorTodoItem' : 'todoItem'}
              onClick={setDone}
              id={id}
            >
              {nameTodo}
            </span>
          </Link>
        </div>
        <div className="col-4">
          <button type="button" id={id} onClick={editTodoNew}>
            edit
          </button>
        </div>
      </div>
    </li>
  );
};
export default Todo;
