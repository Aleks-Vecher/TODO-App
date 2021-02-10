import React from 'react';

const Todo = ({ itemTodos }) =>
  itemTodos.map((item) => <li key={item.nameTodo}>{item.nameTodo}</li>);

export default Todo;
