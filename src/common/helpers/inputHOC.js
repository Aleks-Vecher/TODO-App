// import React from 'react';
//
// const withInput = (WrappedComponent) => ({ txtAlert, callback, txt }) => {
//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//     if (e.target.value.length) {
//       callback(e.target.value);
//     } else {
//       alert(txtAlert);
//     }
//     e.target.value = '';
//     e.target.focus();
//   };
//
//   return <WrappedComponent onSubmit={onSubmit} txt={txt} />;
// };
//
// export default withInput;
