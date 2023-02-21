import React from 'react';
import Button from '../Button';
import SummaryItem from './SummaryItem';

type SummaryProps = {};

const Summary: React.FC<SummaryProps> = () => {
  return (
    <div className='summary'>
      <h2>Summary</h2>
      <SummaryItem />
      <SummaryItem />
      <SummaryItem />
      <SummaryItem />
      <Button />
    </div>
  );
};
export default Summary;
