"use client"
import { createContext, useReducer, useEffect } from "react";

export const Store = createContext();

const initialState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      return { ...state, cart: action.payload.cart };
    case "REMOVE_ITEM":
      return { ...state, cart: action.payload };
    case "INCREMENT_QTY":
      return { ...state, cart: action.payload };
    case "DECREMENT_QTY":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("store")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(state));
  }, [state]);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
