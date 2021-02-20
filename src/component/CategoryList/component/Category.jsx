import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Link } from 'react-router-dom';
import SubCategory from './component';

const Category = ({
  name,
  showTodo,
  status,
  addSubCategory,
  subCategory,
  id,
  deleteCategory,
  deleteSubCategory,
}) => {
  const setStatus = (e) => {
    showTodo(e.target.dataset.name, Number(e.target.dataset.idcategory));
  };

  const addNewSubCategory = (e) => {
    addSubCategory(
      e.target.dataset.id,
      `${e.target.dataset.id} ${Date.now()}`,
      Date.now(),
    );
  };

  const editCategory = () => {};

  const delCategory = (e) => {
    deleteCategory(Number(e.target.dataset.id));
  };
  return (
    <>
      <li>
        <div className="row">
          <div className="col-6 Edit">
            <Link className="linkCategory" to={`/category/${id}`}>
              <span
                role="link"
                aria-hidden="true"
                data-name={name}
                data-idcategory={id}
                className={
                  status ? 'nameCategory colorCategory' : 'nameCategory'
                }
                onClick={setStatus}
              >
                {name}
              </span>
            </Link>
            <button type="button" data-id={id} onClick={editCategory}>
              edit
            </button>
          </div>
          <div className="col-6 trash">
            <button type="button" data-id={id} onClick={delCategory}>
              del
            </button>
            <button type="button" data-id={name} onClick={addNewSubCategory}>
              add
            </button>
          </div>
        </div>
      </li>
      <ul>
        {subCategory.map((item) => (
          <SubCategory
            name={item.nameSubCategory}
            nameCategory={item.category}
            status={item.active}
            id={item.id}
            showTodo={showTodo}
            deleteSubCategory={deleteSubCategory}
            key={item.id}
          />
        ))}
      </ul>
    </>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  showTodo: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  addSubCategory: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Category;
