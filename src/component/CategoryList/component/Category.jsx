import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import style from './Category.css';
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
  const history = useHistory();

  const setStatus = useCallback(
    (e) => {
      showTodo(e.target.dataset.name, Number(e.target.dataset.idcategory));
      history.push(`/category/${id}`);
    },
    [showTodo, history, id],
  );

  const addNewSubCategory = useCallback(
    (e) => {
      addSubCategory(
        Number(e.target.dataset.id),
        e.target.dataset.name,
        `sub  ${e.target.dataset.name}`,
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

  const delCategory = useCallback(
    (e) => {
      // eslint-disable-next-line no-restricted-globals,no-unused-expressions
      confirm('Are you sure to do this?') &&
        deleteCategory(Number(e.target.dataset.id)) &&
        deleteCategoryWithTodo(Number(e.target.dataset.id));
    },
    [deleteCategory, deleteCategoryWithTodo],
  );

  return (
    <>
      <li>
        <div className={style.container}>
          <div className="Edit">
            <div className={style.linkCategory}>
              <span
                role="link"
                aria-hidden="true"
                data-name={name}
                data-idcategory={id}
                className={
                  status
                    ? `${style.nameCategory} ${style.colorCategory}`
                    : `${style.nameCategory}`
                }
                onClick={setStatus}
              >
                {name}
              </span>
            </div>
          </div>
          <div className="trash">
            <button
              className={style.edit}
              type="button"
              data-id={id}
              data-name={name}
              onClick={editCategory}
            >
              edit
            </button>
            <button
              className={style.del}
              type="button"
              data-id={id}
              onClick={delCategory}
            >
              del
            </button>
            <button
              className={style.add}
              type="button"
              data-name={name}
              data-id={id}
              onClick={addNewSubCategory}
            >
              add
            </button>
          </div>
        </div>
      </li>
      <ol className={style.list}>
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
};

export default Category;
