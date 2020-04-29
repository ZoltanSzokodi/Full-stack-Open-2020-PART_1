import React from 'react';
import Statistic from './Statistic';

const Statistics = ({
  feedback: { good, neutral, bad, total },
  stats: { average, positive },
}) => {
  return (
    <table className='statistics'>
      <caption>Statistics</caption>
      <tbody>
        <Statistic text='Good' stat={good} />
        <Statistic text='Neutral' stat={neutral} />
        <Statistic text='Bad' stat={bad} />
        <Statistic text='Average' stat={average} />
        <Statistic text='Positive' stat={positive} />
      </tbody>
    </table>
  );
};

export default Statistics;
