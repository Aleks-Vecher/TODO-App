import React from 'react';
import { checkCategoryStatus } from '../../store/selectors/categories';
import Todo from './component/Todo';
import EditTodo from './component/EditTodo';

const TodoList = ({
  todo,
  categories,
  editTodoToggle,
  todoToggle,
  editTodo,
  editTodoItem,
}) => {
  const editTodoNew = (e) => {
    editTodoToggle();
    editTodo(e.target.id);
  };
  return todoToggle ? (
    <EditTodo editTodoNew={editTodoNew} editTodoItem={editTodoItem} />
  ) : (
    <ul>
      {todo.map(
        (item) =>
          checkCategoryStatus(categories) &&
          item.id === checkCategoryStatus(categories).id && (
            <Todo
              nameTodo={item.nameTodo}
              key={item.nameTodo}
              id={item.idTodo}
              editTodoNew={editTodoNew}
            />
          ),
      )}
    </ul>
  );
};
export default TodoList;
