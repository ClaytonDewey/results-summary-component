import React from 'react';

type ContainerProps = {
  children: {};
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='container'>
      <>{children}</>
    </div>
  );
};
export default Container;
