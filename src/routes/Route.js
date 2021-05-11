import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import App from '../components/App';
import Footer from '../components/footer';
import CatalogueList from '../containers/CatalogueList';
import Singlelist from '../containers/Singlelist';
import Nav from '../components/Nav';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={CatalogueList} />
      <Route exact path="/Singlelist" component={Singlelist} />

    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
