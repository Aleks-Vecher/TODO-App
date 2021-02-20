import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const SubCategory = ({
  name,
  showTodo,
  id,
  status,
  deleteSubCategory,
  nameCategory,
}) => {
  const setStatusSubCategory = (e) => {
    showTodo(e.target.dataset.name, Number(e.target.dataset.idsubcategory));
  };
  const delSubCategory = (e) => {
    deleteSubCategory(
      Number(e.target.dataset.id),
      e.target.dataset.namecategory,
    );
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
          <button type="button" data-id={id}>
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
