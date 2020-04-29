import React, { useState, useEffect } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  });
  const [stats, setStats] = useState({
    average: 0,
    positive: 0,
  });

  // When the feedback state changes calculate the statistics
  useEffect(() => {
    const calcPositiveAvrg = ((feedback.good / feedback.total) * 100).toFixed(
      2
    );
    const calcAvrg = ((feedback.good - feedback.bad) / feedback.total).toFixed(
      2
    );
    setStats(stats => ({
      ...stats,
      average: calcAvrg,
      positive: calcPositiveAvrg,
    }));
  }, [feedback]);

  const handleClick = e => {
    setFeedback({
      ...feedback,
      [e.target.value]: feedback[e.target.value] + 1,
      total: feedback.total + 1,
    });
  };

  return (
    <div className='container'>
      <Feedback handleClick={handleClick} />
      {feedback.total === 0 ? (
        <p>no feedback given</p>
      ) : (
        <Statistics feedback={feedback} stats={stats} />
      )}
    </div>
  );
};

export default App;
