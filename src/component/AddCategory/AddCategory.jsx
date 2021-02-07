import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

const AddCategory = ({ addCategory }) => {
  const textInput = React.createRef();
  useEffect(() => textInput.current.focus());

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(textInput.current.value);
    addCategory(textInput.current.value);
    textInput.current.value = '';
    textInput.current.focus();
  };
  return (
    <form onSubmit={onSubmit}>
      <input ref={textInput} type="text" placeholder="Enter Category title" />
      <button type="submit">ADD</button>
    </form>
  );
};

// AddCategory.propTypes = {
//   addCategory: PropTypes.func,
// };

export default AddCategory;
