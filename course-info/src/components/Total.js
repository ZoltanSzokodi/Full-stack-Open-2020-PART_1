import React from 'react';

const Total = ({ course: { parts } }) => {
  let numOfExercises = 0;
  parts.map(part => (numOfExercises += part.exercises));

  return <p>Number of exercises {numOfExercises}</p>;
};

export default Total;
