import React from 'react';
import Footer from './Footer';
import Container from './Container';
import ResultCard from './ResultCard';
import Summary from './Summary';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Container>
        <ResultCard />
        <Summary />
      </Container>
      <Footer />
    </>
  );
};
export default App;
