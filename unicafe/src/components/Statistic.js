import React from 'react';

const Statistic = ({ text, stat }) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{text === 'Positive' ? `${stat}%` : stat}</td>
    </tr>
  );
};

export default Statistic;
