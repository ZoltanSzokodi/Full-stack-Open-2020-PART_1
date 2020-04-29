import React from 'react';

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} value={text} className='feedback-btn'>
      {text}
    </button>
  );
};

export default Button;
