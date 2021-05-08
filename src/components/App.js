import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import CatalogueList from '../containers/CatalogueList';
import Catalogue from './Catalogue';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const App = () => (
  <CatalogueList />
);

export default App;
