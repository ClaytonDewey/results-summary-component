import React from 'react';
import Button from '../Button';
import SummaryItem from './SummaryItem';

type SummaryProps = {
  data: {
    category: string;
    score: number;
    icon: string;
  }[];
};

const Summary: React.FC<SummaryProps> = ({ data }) => {
  return (
    <div className='summary'>
      <h2>Summary</h2>
      {data.map((item) => (
        <SummaryItem
          key={item.category}
          category={item.category}
          score={item.score}
          icon={item.icon}
        />
      ))}
      <Button />
    </div>
  );
};
export default Summary;
