import { createContext, useReducer, useEffect } from 'react';
export const MyContext = createContext();
const initial = {
  cart: { cartItems: [] },
  users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_ITEM': {
      const newItem = action.payload;
      const existItems = state.cart.cartItems.find((f) => f.id === newItem.id);
      const cartItems = existItems
        ? state.cart.cartItems.map((f) =>
            f.title === existItems.title ? newItem : f
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'ERMOVE_ITEM': {
      const newItem = action.payload;
      const cartItems = state.cart.cartItems.filter((f) => f.id !== newItem.id);
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'ADD_NEW_USERS': {
      const newItem = action.payload;
      console.log(newItem);
      localStorage.setItem('users', JSON.stringify(newItem));
      return { ...state, users: { ...state.users, newItem } };
    }
    default:
      return state;
  }
};
const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);
  const value = { state, dispatch };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
export default MyContextProvider;
