"use client"
import { createContext, useReducer } from "react";
export const Store = createContext()

const initialState = {
    cart: { cartItems: [] }
}

function reducer(state, action) {
    switch (action.type) {
        case 'CART_ADD_ITEM':
            return { ...state, cart: action.payload.cart};
        case 'REMOVE_ITEM':
            return { ...state, cart: action.payload};

        case 'INCREMENT_QTY':
            return { ...state, cart: action.payload};

        case 'DECREMENT_QTY':
            return { ...state, cart: action.payload};
        default:
            return state;
    }
}
export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }
    return <Store.Provider value={value}>{children}</Store.Provider>
}