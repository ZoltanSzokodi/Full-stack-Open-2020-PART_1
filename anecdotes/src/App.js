import React, { useState, useEffect } from 'react';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [mostVotes, setMostVotes] = useState({
    anecdote: '',
    votes: 0,
  });

  useEffect(() => {
    let currentMax = '';
    let voteCount = 0;

    for (let key in votes) {
      if (votes[key] > voteCount) {
        currentMax = anecdotes[key];
        voteCount = votes[key];
      }
    }

    setMostVotes(mostVotes => ({
      ...mostVotes,
      anecdote: currentMax,
      votes: voteCount,
    }));
  }, [votes]);

  // Event handlers
  const nextAnecdote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  };

  const voteAnecdote = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1,
    });
  };

  return (
    <div className='container'>
      <div>Current anecdote</div>
      <div className='anecdote'>{`"${anecdotes[selected]}"`}</div>
      <div className='votes'>{`This anecdote has ${votes[selected]} votes`}</div>

      <button onClick={voteAnecdote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

      <div>Anecdote with the most votes</div>
      <div className='anecdote'>
        {mostVotes.anecdote === '' ? 'No votes yet' : mostVotes.anecdote}
      </div>

      {mostVotes.anecdote !== '' && (
        <div className='votes'>{`This anecdote has ${mostVotes.votes} votes`}</div>
      )}
    </div>
  );
};

export default App;
