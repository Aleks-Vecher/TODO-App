import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import style from './SubCategory.css';

const SubCategory = ({
  name,
  showTodo,
  id,
  status,
  deleteSubCategory,
  deleteCategoryWithTodo,
  editNameSubCategory,
  nameCategory,
}) => {
  const history = useHistory();

  const setStatusSubCategory = useCallback(
    (e) => {
      showTodo(e.target.dataset.name, Number(e.target.dataset.idsubcategory));
      history.push(`/category/${id}`);
    },
    [showTodo, history, id],
  );
  const editSubCategory = useCallback(
    (e) => {
      editNameSubCategory(
        prompt('change name subCategory', e.target.dataset.subname) ||
          e.target.dataset.subname,
        Number(e.target.dataset.id),
      );
    },
    [editNameSubCategory],
  );

  const delSubCategory = useCallback(
    (e) => {
      // eslint-disable-next-line no-restricted-globals,no-unused-expressions
      confirm('Are you sure to do this?') &&
        deleteSubCategory(
          Number(e.target.dataset.id),
          e.target.dataset.namecategory,
        ) &&
        deleteCategoryWithTodo(Number(e.target.dataset.id));
    },
    [deleteSubCategory, deleteCategoryWithTodo],
  );

  return (
    <li>
      <div className={style.container}>
        <div className="edit">
          <div className={style.linkRoute}>
            <span
              role="link"
              aria-hidden="true"
              data-name={name}
              data-idsubcategory={id}
              className={
                status
                  ? `${style.nameSubCategory} ${style.colorSubCategory}`
                  : `${style.nameSubCategory}`
              }
              onClick={setStatusSubCategory}
            >
              {name}
            </span>
          </div>
        </div>
        <div className="trash">
          <button
            className={style.edit}
            type="button"
            data-subname={name}
            data-id={id}
            onClick={editSubCategory}
          >
            edit
          </button>
          <button
            className={style.del}
            type="button"
            data-id={id}
            data-namecategory={nameCategory}
            onClick={delSubCategory}
          >
            del
          </button>
        </div>
      </div>
    </li>
  );
};

export default SubCategory;
