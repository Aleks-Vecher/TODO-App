import React, { useCallback } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

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
  const setStatusSubCategory = (e) => {
    showTodo(e.target.dataset.name, Number(e.target.dataset.idsubcategory));
  };
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

  const delSubCategory = (e) => {
    // eslint-disable-next-line no-restricted-globals,no-unused-expressions
    confirm('Are you sure to do this?') &&
      deleteSubCategory(
        Number(e.target.dataset.id),
        e.target.dataset.namecategory,
      ) &&
      deleteCategoryWithTodo(Number(e.target.dataset.id));
  };
  return (
    <li>
      <div className="row">
        <div className="col-6 edit">
          <Link className="linkRoute" to={`/category/subcategory/${id}`}>
            <span
              role="link"
              aria-hidden="true"
              data-name={name}
              data-idsubcategory={id}
              className={
                status ? 'nameSubCategory colorSubCategory' : 'nameSubCategory'
              }
              onClick={setStatusSubCategory}
            >
              {name}
            </span>
          </Link>
          <button
            type="button"
            data-subname={name}
            data-id={id}
            onClick={editSubCategory}
          >
            edit
          </button>
        </div>
        <div className="col-6 trash">
          <button
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
