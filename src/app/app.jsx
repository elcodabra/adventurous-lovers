import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

const App = () => {
  return (
    <div style={{backgroundColor: 'white'}}>
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}

export default App;
