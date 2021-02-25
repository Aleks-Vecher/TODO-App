import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import style from './Todo.css';

const Todo = ({ nameTodo, editTodoNew, id, completed, setDoneTodo }) => {
  const setDone = useCallback(
    (e) => {
      setDoneTodo(Number(e.target.id));
    },
    [setDoneTodo],
  );
  return (
    <li key={nameTodo} className={style.item}>
      <div className={style.container}>
        <div>
          <Link className={style.linkTodo} to={`/todo/${id}`}>
            <span
              className={
                completed
                  ? `${style.todoItem} ${style.colorTodoItem}`
                  : `${style.todoItem}`
              }
              role="link"
              aria-hidden="true"
              onClick={setDone}
              id={id}
            >
              {nameTodo}
            </span>
          </Link>
        </div>
        <div className="col-4">
          <button
            className={style.edit}
            type="button"
            id={id}
            onClick={editTodoNew}
          >
            edit
          </button>
        </div>
      </div>
    </li>
  );
};
export default Todo;
