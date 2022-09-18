import React, { Component } from "react";
import { useContext } from "react";
import { useState } from "react";
import { uuid } from "react-uuid";

const CartContext = React.createContext([]);

const useItems = () => {
  return useContext(CartContext);
};

const CartItemsProvider = ({ defaultValue = [], children }) => {
  const [items, setItems] = useState(defaultValue);

  //VALIDA QUE EXISTA UN PRODUCTO EN EL CARRITO
  const isInCart = (item) => {
    return items.some((b) => b.title === item.title);
  };

  //AGREGA UN ELEMENTO AL CARRITO
  const addItem = (item,quantity) => {
    console.log(isInCart(item))
    if (isInCart(item)) {
      console.log("El item ya se encontraba cargado");
    }else{
      const newItem = { ...item,quantity};
      setItems([...items, newItem]);
      console.log("Item agregado al carrito");
    }
  };

  //REMUEVE UN PRODUCTO DEL CARRITO
  const removeItem = (item) => {
    const removeItem = items.filter((s) => s.id !== item.id);
    return setItems(removeItem);
  };

  //ELIMINA TODOS LOS PRODUCTOS DEL CARRITO
  const clear = () => {
    setItems([]);
  };

  const context = {
    isInCart,
    addItem,
    removeItem,
    clear,
    items,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export { useItems, CartItemsProvider };
