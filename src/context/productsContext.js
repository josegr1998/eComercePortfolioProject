import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/productsReducer";
import { products_url } from "../utils/data";
import axios from "axios";
const ProductsContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  products: [],
  featuredProducts: [],
  products_loading: true,
  single_product: {},
  single_product_loading: true,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };
  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: "LET_LOADING_BEGIN" });
    const response = await axios.get(url);
    console.log(response.data);
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: "LET_SINGLE_PRODUCT_LOADING_BEGIN" });
    const response = await axios.get(url);
    console.log(response.data);
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: response.data });
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);
  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
