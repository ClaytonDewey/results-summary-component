import React from 'react';
import Button from '../Button';
import SummaryItem from './SummaryItem';
import data from '../../data.json';

type SummaryProps = {};

const Summary: React.FC<SummaryProps> = () => {
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
