import { createContext, useReducer } from 'react';
export const MyContext = createContext();
const initial = {
  cart:{ cartItems: [] },
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
  }
};
const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);
  const value = { state, dispatch };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
export default MyContextProvider;
