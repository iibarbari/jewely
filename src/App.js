import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Details from './components/Product/Details';
import Slider from './components/Layout/Slider';
import ProductList from './components/Category/ProductList';
import Modal from './components/Layout/Modal';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/slider" component={Slider} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
