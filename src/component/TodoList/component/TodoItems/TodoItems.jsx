import React from 'react';
import Todo from './component';

const TodoItems = ({ todo, categories, editTodo, setDoneTodo }) => (
  <ul>
    {todo.map(
      (item) =>
        categories &&
        item.id === categories.id && (
          <Todo
            nameTodo={item.nameTodo}
            key={item.idTodo}
            id={item.idTodo}
            editTodo={editTodo}
            completed={item.completed}
            setDoneTodo={setDoneTodo}
          />
        ),
    )}
  </ul>
);

export default TodoItems;
