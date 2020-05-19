import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AdoptMyShop from './components/AdoptMyShop';
import './css/app.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/adopt-my-shop" component={AdoptMyShop} />
      </Switch>
    </Router>
  );
}
export default App;
