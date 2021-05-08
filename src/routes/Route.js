import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import Footer from '../components/footer';
import Singlelist from '../containers/Singlelist';
import Nav from '../components/Nav';
import '../style.css';

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/Singlelist" component={Singlelist} />

    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
