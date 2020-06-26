import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AdoptMyShop from './components/AdoptMyShop';
import SubmitAdopt from './components/SubmitAdopt';
import NominateShop from './components/NominateShop';
import SubmitNominate from './components/SubmitNominate';
import Cities from './components/Cities';
import BusinessCity from './components/BusinessCity';
import SingleBusiness from './components/SingleBusiness';
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
        <Route path="/cities" component={Cities} />
        <Route path="/business-city" component={BusinessCity} />
        <Route path="/single-business" component={SingleBusiness}/>
      </Switch>
    </Router>
  );
}
export default App;
