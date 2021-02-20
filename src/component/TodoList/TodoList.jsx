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
  setTextarea,
  setInput,
  saveTodoItem,
  cancelTodoItem,
  toggleDoneTodo,
  setDoneTodo,
}) => {
  const editTodoNew = (e) => {
    editTodoToggle();
    editTodo(Number(e.target.id));
  };
  return todoToggle ? (
    <EditTodo
      editTodoItem={editTodoItem}
      setTextarea={setTextarea}
      setInput={setInput}
      saveTodoItem={saveTodoItem}
      editTodoToggle={editTodoToggle}
      cancelTodoItem={cancelTodoItem}
      toggleDoneTodo={toggleDoneTodo}
    />
  ) : (
    <ul>
      {todo.map(
        (item) =>
          checkCategoryStatus(categories) &&
          item.id === checkCategoryStatus(categories).id && (
            <Todo
              nameTodo={item.nameTodo}
              key={item.idTodo}
              id={item.idTodo}
              editTodoToggle={editTodoToggle}
              editTodoNew={editTodoNew}
              completed={item.completed}
              setDoneTodo={setDoneTodo}
            />
          ),
      )}
    </ul>
  );
};
export default TodoList;
