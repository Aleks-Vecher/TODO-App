import React from 'react';
import PropTypes from 'prop-types';
import Category from './component';

const CategoryList = ({ categories, showTodo }) => (
  <ul>
    {categories.map((item) => (
      <Category
        key={item.nameCategory}
        name={item.nameCategory}
        status={item.active}
        showTodo={showTodo}
      />
    ))}
  </ul>
);

CategoryList.propTypes = {
  showTodo: PropTypes.func.isRequired,
};

export default CategoryList;
