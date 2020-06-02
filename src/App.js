import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AdoptMyShop from './components/AdoptMyShop';
import SubmitAdopt from './components/SubmitAdopt';
import NominateShop from './components/NominateShop';
import SubmitNominate from './components/SubmitNominate';
import './css/app.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/adopt-my-shop" component={AdoptMyShop} />
        <Route path="/adopt-my-shop-submission-confirmation" component={SubmitAdopt} />
        <Route path="/nominate-a-shop" component={NominateShop} />
        <Route path="/nominate-a-shop-submission-confirmation" component={SubmitNominate} />
      </Switch>
    </Router>
  );
}
export default App;
