import React from 'react';
import Nav from './Nav'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CatalogueList from '../containers/CatalogueList'
import Catalogue from './Catalogue'
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././style.css';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Nav />
    <Switch>
     
      <Route exact path="/" component={CatalogueList} />
      <Route exact path="/Catalogue" component={Catalogue} />

    </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;

