import React from 'react';
import loadable from '@loadable/component';
import style from './App.css';
import pic from './common/pictures/wallpaperflare-cropped33.jpg';

const AddCategory = loadable(() => import('./component/AddCategory'));
const CategoryList = loadable(() => import('./component/CategoryList'));
const TodoList = loadable(() => import('./component/TodoList'));
const AddTodo = loadable(() => import('./component/AddTodo'));
const ProgressBar = loadable(() => import('./component/ProgressBar'));
const Filter = loadable(() => import('./component/Filter'));

const App = () => (
  <div className={style.section}>
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.name}>To-Do List</h1>
        <div>
          <img alt="" src={pic} />
        </div>
        <div className={style.filter}>
          <Filter />
        </div>
      </div>
      <div className={style.progressbar}>
        <ProgressBar />
      </div>
      <div className={style.main}>
        <div className={style.category}>
          <AddCategory />
          <CategoryList />
        </div>
        <div className={style.todo}>
          <AddTodo />
          <TodoList />
        </div>
      </div>
      <p>
        Please, do not hesitate to contact me, if you are interested in hiring
        me :) Skype: aleksandr.vecher
      </p>
    </div>
  </div>
);

export default App;
