import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App'
import Nav from './Nav'
import catalogue from './catalogue'
const Routes = () => (
    <BrowserRouter>
      <Nav />
      <Switch>
       
        <Route exact path="/App" component={App} />
        <Route exact path="/catalogue" component={catalogue} />
  
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;