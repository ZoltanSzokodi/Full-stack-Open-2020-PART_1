import React from 'react';
import Button from './Button';

const Feedback = ({ handleClick }) => {
  return (
    <div className='feedback'>
      <h1>give us your feedback</h1>
      <div className='feedback-buttons'>
        <Button handleClick={handleClick} text={'good'} />
        <Button handleClick={handleClick} text={'neutral'} />
        <Button handleClick={handleClick} text={'bad'} />
      </div>
    </div>
  );
};

export default Feedback;
