import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homescreen from '../src/screen/Homescreen'
import addProductScreen from '../src/screen/Homescreen'
import ProductScreen from '../src/screen/ProductScreen'
import Header from '../src/components/Header'

function App() {
  return (
    <BrowserRouter>
        <Header />
          <Switch>
           <Route path="/" component={Homescreen} exact></Route>
           <Route path="/product/:id" component={ProductScreen} exact></Route>
           <Route path="/add-product" component={addProductScreen} exact></Route>
          </Switch>
    </BrowserRouter>
  );
}

export default App;
