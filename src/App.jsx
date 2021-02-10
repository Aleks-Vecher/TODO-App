import React from 'react';
import AddCategory from './component/AddCategory';
import CategoryList from './component/CategoryList';
import TodoList from './component/TodoList';

const App = () => (
  <div className="start-screen-container m-4">
    <div className="row header">
      <div className="col-12 ">
        <h1>To-Do List</h1>
      </div>
    </div>
    <div className="row ">
      <div className="col-12 progressBar">
        <p>progressBar</p>
      </div>
    </div>
    <div className="row">
      <div className="col-6 categories">
        <AddCategory />
        <CategoryList />
      </div>
      <div className="col-6 task">
        <TodoList />
      </div>
    </div>
  </div>
);

export default App;
