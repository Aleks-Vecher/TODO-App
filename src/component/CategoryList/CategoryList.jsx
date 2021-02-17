import React from 'react';
import PropTypes from 'prop-types';
import Category from './component';

const CategoryList = ({
  categories,
  showTodo,
  deleteCategory,
  addSubCategory,
  deleteSubCategory,
}) => (
  <ul>
    {categories.map((item) => (
      <Category
        key={item.nameCategory}
        name={item.nameCategory}
        status={item.active}
        id={item.id}
        showTodo={showTodo}
        deleteSubCategory={deleteSubCategory}
        deleteCategory={deleteCategory}
        addSubCategory={addSubCategory}
        subCategory={item.subCategory}
      />
    ))}
  </ul>
);

CategoryList.propTypes = {
  showTodo: PropTypes.func.isRequired,
};

export default CategoryList;
