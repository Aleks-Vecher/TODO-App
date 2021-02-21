import React, { useCallback } from 'react';
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
  deleteCategoryWithTodo,
  editNameCategory,
  editNameSubCategory,
}) => {
  const setStatus = useCallback(
    (e) => {
      showTodo(e.target.dataset.name, Number(e.target.dataset.idcategory));
    },
    [showTodo],
  );

  const addNewSubCategory = useCallback(
    (e) => {
      addSubCategory(
        e.target.dataset.id,
        `sub  ${e.target.dataset.id}`,
        Date.now(),
      );
    },
    [addSubCategory],
  );

  const editCategory = useCallback(
    (e) => {
      editNameCategory(
        prompt('change name Category', e.target.dataset.name) ||
          e.target.dataset.name,
        Number(e.target.dataset.id),
      );
    },
    [editNameCategory],
  );

  const delCategory = (e) => {
    // eslint-disable-next-line no-restricted-globals,no-unused-expressions
    confirm('Are you sure to do this?') &&
      deleteCategory(Number(e.target.dataset.id)) &&
      deleteCategoryWithTodo(Number(e.target.dataset.id));
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
            <button
              type="button"
              data-id={id}
              data-name={name}
              onClick={editCategory}
            >
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
      <ol>
        {subCategory.map((item) => (
          <SubCategory
            name={item.nameSubCategory}
            nameCategory={item.category}
            status={item.active}
            id={item.id}
            showTodo={showTodo}
            deleteSubCategory={deleteSubCategory}
            deleteCategoryWithTodo={deleteCategoryWithTodo}
            editNameSubCategory={editNameSubCategory}
            key={item.id}
          />
        ))}
      </ol>
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
