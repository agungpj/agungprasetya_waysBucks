import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homescreen from '../src/screen/Homescreen'
import addProductScreen from '../src/screen/Homescreen'
import ProductScreen from '../src/screen/ProductScreen'
import cartScreen from '../src/screen/cartScreen'
import userScreen from '../src/screen/userScreen'
import Header from '../src/components/Header'

function App() {
  return (
    <BrowserRouter>
        <Header />
          <Switch>
           <Route path="/" component={Homescreen} exact></Route>
           <Route path="/product/:id" component={ProductScreen} exact></Route>
           <Route path="/add-product" component={addProductScreen} exact></Route>
           <Route path="/cart" component={cartScreen} exact></Route>
           <Route path="/user" component={userScreen} exact></Route>
          </Switch>
    </BrowserRouter>
  );
}

export default App;
