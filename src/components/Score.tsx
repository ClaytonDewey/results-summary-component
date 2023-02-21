import React from 'react';

type ScoreProps = {
  score: number;
};

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className='score-result'>
      <p className='score-value'>{score}</p>
      <p>of 100</p>
    </div>
  );
};
export default Score;
