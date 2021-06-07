import React from 'react';
import Routes from './routes';
import Navbar from './components/Navbar';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes />
    </>
  );
}

export default App;
