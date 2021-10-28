import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = React.createContext();

const getCart = () => {
  let localCart = localStorage.getItem("cart");
  if (localCart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
const initialState = {
  cart: getCart(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 700,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, color, product) => {
    console.log(id, amount, color, product);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        amount,
        color,
        product,
      },
    });
  };

  const toggleAmount = (id, type) => {
    console.log(id, type);
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: "GET_CART_TOTAL" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        toggleAmount,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
