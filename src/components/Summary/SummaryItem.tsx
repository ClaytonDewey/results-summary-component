import React from 'react';

type SummaryItemProps = {
  category: string;
  score: number;
  icon: string;
};

const SummaryItem: React.FC<SummaryItemProps> = ({ category, score, icon }) => {
  return (
    <div className={`summary-item ${category.toLowerCase()}`}>
      <div className='category'>
        <img src={icon} alt={category} />
        {category}
      </div>
      <div className='score'>
        <span>{score}</span> / 100
      </div>
    </div>
  );
};
export default SummaryItem;
