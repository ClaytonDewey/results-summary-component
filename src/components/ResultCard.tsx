import React from 'react';
import Score from './Score';

type ResultCardProps = {};

const ResultCard: React.FC<ResultCardProps> = () => {
  return (
    <div className='results'>
      <h1>Your Result</h1>
      <Score score={76} />
      <p>Great</p>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};
export default ResultCard;
