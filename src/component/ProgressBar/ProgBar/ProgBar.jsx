import React from 'react';
import style from './ProgBar.css';

const ProgBar = (props) => {
  const { completed } = props;

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#41cfae',
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  };

  return (
    <div className={style.containerStyles}>
      <div style={fillerStyles}>
        <span className={style.labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgBar;
