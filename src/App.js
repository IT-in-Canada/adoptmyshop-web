import React from 'react';
import { Fragment } from 'react';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import SearchCity from './components/SearchCity';
import BusinessAction from './components/BusinessAction';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <HowItWorks />
      <SearchCity />
      <BusinessAction />
      <Footer />
    </Fragment>
  );
}
export default App;
