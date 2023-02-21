import React, { useEffect, useState } from 'react';
import Score from './Score';

type ResultCardProps = {
  data: {
    category: string;
    score: number;
    icon: string;
  }[];
};

const ResultCard: React.FC<ResultCardProps> = ({ data }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let total = 0;
    const scoreTotal = data.map((item) => item.score);
    total = Math.round(scoreTotal.reduce((a, b) => a + b) / scoreTotal.length);
    setScore(total);
  }, [data]);
  return (
    <div className='results'>
      <h1>Your Result</h1>
      <Score score={score} />
      <p>Great</p>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};
export default ResultCard;
