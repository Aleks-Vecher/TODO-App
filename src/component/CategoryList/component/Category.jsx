import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

const Category = ({ name, showTodo, status }) => {
  const setStatus = (e) => {
    // e.target.classList.toggle('colorCategory');
    showTodo(e.target.dataset.name);
  };
  return (
    <li>
      <div className="row">
        <div className="col-6 Edit">
          <span
            role="link"
            aria-hidden="true"
            data-name={name}
            className={status ? 'nameCategory colorCategory' : 'nameCategory'}
            onClick={setStatus}
          >
            {name}
          </span>
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className="col-6 trash">
          <FontAwesomeIcon icon={faTrashAlt} />
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </li>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  showTodo: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Category;
