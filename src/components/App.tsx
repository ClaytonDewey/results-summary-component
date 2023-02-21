import React from 'react';
import Footer from './Footer';
import Container from './Container';
import ResultCard from './ResultCard';
import Summary from './Summary';
import data from '../data.json';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Container>
        <ResultCard data={data} />
        <Summary data={data} />
      </Container>
      <Footer />
    </>
  );
};
export default App;
