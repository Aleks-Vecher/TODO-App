import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ itemTodos }) =>
  itemTodos.map((item) => (
    <li key={item.nameTodo}>
      <div className="row">
        <div className="col-6">
          <input type="checkbox" />
          <span>{item.nameTodo}</span>
        </div>
        <div className="col-6">
          <FontAwesomeIcon icon={faEdit} />
        </div>
      </div>
    </li>
  ));

export default Todo;
