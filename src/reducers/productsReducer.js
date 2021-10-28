const reducer = (state, action) => {
  if (action.type === "OPEN_SIDEBAR") {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === "CLOSE_SIDEBAR") {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === "LET_LOADING_BEGIN") {
    return { ...state, products_loading: true };
  }

  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const featuredProducts = action.payload.filter((product) => {
      if (product.featured) {
        return product;
      }
    });

    return {
      ...state,
      featuredProducts: featuredProducts,
      products: action.payload,
      products_loading: false,
    };
  }
  if (action.type === "LET_SINGLE_PRODUCT_LOADING_BEGIN") {
    return { ...state, single_product_loading: true };
  }
  if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }
  return state;
};

export default reducer;
