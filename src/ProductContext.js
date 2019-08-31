/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext } from 'react';
import { storeProducts, detailProduct } from './data';

export const ProductContext = createContext();

export const ProductProvider = props => {
  const { children } = props;
  const [megaState, setMegaState] = useState({
    productList: [],
    details: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  });
  const { cart } = megaState;

  const setProduct = () => {
    let tempProducts = [];

    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });

    setMegaState({ ...megaState, productList: tempProducts });

    return tempProducts;
  };

  const getProduct = id => {
    return megaState.productList.find(product => product.id === id);
  };

  const handleDetail = id => {
    const product = getProduct(id);
    setMegaState({ ...megaState, details: product });
  };

  const addToCart = id => {
    const tempProducts = [...megaState.productList];
    const index = tempProducts.indexOf(getProduct(id));
    const item = tempProducts[index];
    item.count += 1;
    item.inCart = item.count >= 1;
    item.total = item.price * item.count;
    setMegaState({
      ...megaState,
      productList: tempProducts,
      details: item,
      cart: [...megaState.cart, item],
    });
  };

  const toggleModal = id => {
    const product = getProduct(id);
    setMegaState({
      ...megaState,
      modalOpen: !megaState.modalOpen,
      modalProduct: product,
    });
  };

  const increment = id => {
    let tempCart = [...megaState.cart];
    const index = tempCart.indexOf(getProduct(id));
    let incrementedProduct = tempCart[index];
    incrementedProduct.count = incrementedProduct.count + 1;
    incrementedProduct.total = incrementedProduct.count * incrementedProduct.price;

    setMegaState({
      ...megaState,
      cart: tempCart,
    });
  };

  const decrement = id => {
    let tempCart = [...megaState.cart];
    const index = tempCart.indexOf(getProduct(id));
    let decrementedProduct = tempCart[index];

    if (decrementedProduct.count > 1) {

      let decrementedProduct = tempCart[index];
      decrementedProduct.count = decrementedProduct.count - 1;
      decrementedProduct.total = decrementedProduct.count * decrementedProduct.price;

      setMegaState({
        ...megaState,
        cart: tempCart,
      });
    } else if (decrementedProduct.count === 1) {
      removeItem(id);
    }
  };

  const removeItem = id => {
    let tempProducts = [...megaState.productList];
    let tempCart = [...megaState.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(getProduct(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setMegaState({
      ...megaState,
      productList: tempProducts,
      cart: tempCart,
    });
  };

  const clearCart = () => {
    setMegaState({
      ...megaState,
      cart: [],
      productList: setProduct(),
    });
  };

  const addTotals = () => {
    let subTotal = 0;
    megaState.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.18;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setMegaState({
      ...megaState,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    });
  };

  /* USE EFFECT FUNCTIONS */
  useEffect(() => {
    addTotals();
  }, [cart]);

  useEffect(() => {
    setProduct();
  }, []);
  /* USE EFFECT FUNCTIONS */

  return (
    <ProductContext.Provider
      value={{
        megaState,
        setMegaState,
        addToCart,
        handleDetail,
        toggleModal,
        clearCart,
        increment,
        decrement,
        removeItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};