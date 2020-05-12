import React from 'react';
import { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import SearchCity from './components/SearchCity';

function App() {
  return (
    <Fragment>
      <Header />
      <HowItWorks />
      <SearchCity />
      <Footer />
    </Fragment>
  );
}
export default App;
