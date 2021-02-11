import React, { useEffect } from 'react';
import { checkCategoryStatus } from '../../store/selectors/categories';
// import withInput from '../../common/helpers/inputHOC';

const AddTodo = ({ categories, addTodo }) => {
  const textInput = React.createRef();
  useEffect(() => textInput.current.focus());

  const onSubmit = (e) => {
    e.preventDefault();
    if (textInput.current.value.length) {
      if (checkCategoryStatus(categories)) {
        addTodo(
          textInput.current.value,
          checkCategoryStatus(categories).nameCategory,
        );
      } else {
        alert('Please Enter and Choose Category');
      }
    } else {
      alert('Please Enter Todo');
    }
    textInput.current.value = '';
    textInput.current.focus();
  };
  return (
    <form onSubmit={onSubmit}>
      <input ref={textInput} type="text" placeholder="Text input with button" />
      <button type="submit">ADD</button>
    </form>
  );
};

// const StartAddTodo = ({ onSubmit, txt }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" placeholder={txt} />
//       <button type="submit">ADD</button>
//     </form>
//   );
// };
// const MainAddTodo = withInput(StartAddTodo);
//
// const AddTodo = () => <MainAddTodo txtAlert="Hello" txt="add" />;

export default AddTodo;
