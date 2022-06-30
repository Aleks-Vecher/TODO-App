import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Todo.css';

const Todo = ({ nameTodo, id, completed, setDoneTodo, editTodo }) => {
  const history = useHistory();

  const setDone = useCallback(
    (e) => {
      setDoneTodo(Number(e.target.id));
    },
    [setDoneTodo],
  );

  const editTodoNew = useCallback(
    (e) => {
      editTodo(Number(e.target.id));
      history.push(`/todo/${id}`);
    },
    [editTodo, history, id],
  );

  return (
    <li key={nameTodo} className={style.item}>
      <div className={style.contain}>
        <div>
          <div className={style.linkTodo}>
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
          </div>
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
