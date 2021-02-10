import React from 'react';
import Todo from './component';

const TodoList = ({ categories }) => (
  <ul>
    {categories.map(
      (item) => item.active && <Todo itemTodos={item.todo} key={item.todo} />,
    )}
  </ul>
);

export default TodoList;
