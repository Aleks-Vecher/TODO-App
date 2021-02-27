import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodoItems from './component/TodoItems';
import EditTodo from './component/EditTodo';

const TodoList = () => (
  <Switch>
    <Route path="/category/:id">
      <TodoItems />
    </Route>
    <Route path="/todo/:id">
      <EditTodo />
    </Route>
  </Switch>
);

export default TodoList;
