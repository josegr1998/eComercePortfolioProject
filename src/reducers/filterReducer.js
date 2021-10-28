const reducer = (state, action) => {
  if (action.type === "GET_FEATURED_PRODUCTS") {
    const all_price = action.payload.map((item) => {
      return item.price;
    });
    const maxPrice = Math.max(...all_price);

    return {
      ...state,
      all_products: action.payload,
      filtered_products: action.payload,
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === "SET_GRID_VIEW") {
    return {
      ...state,
      gridView: true,
    };
  }
  if (action.type === "SET_LIST_VIEW") {
    return {
      ...state,
      gridView: false,
    };
  }
  if (action.type === "UPDATE_SORT") {
    return { ...state, sort: action.payload };
  }

  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;

    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        color: "all",
        min_price: 0,
        shipping: false,
        price: state.filters.max_price,
      },
    };
  }

  if (action.type === "SORT_PRODUCTS") {
    if (state.sort === "price-lowest") {
      const newProducts = state.filtered_products.sort((a, b) => {
        return a.price - b.price;
      });

      return { ...state, filtered_products: newProducts };
    }
    if (state.sort === "price-highest") {
      const newProducts = state.filtered_products.sort((a, b) => {
        return b.price - a.price;
      });

      return { ...state, filtered_products: newProducts };
    }
    if (state.sort === "name-a") {
      const newProducts = state.filtered_products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      return { ...state, filtered_products: newProducts };
    }
    if (state.sort === "name-z") {
      const newProducts = state.filtered_products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
      return { ...state, filtered_products: newProducts };
    }
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { category, color, company, price, shipping, text } = state.filters;
    const { all_products } = state;

    let newProducts = [...all_products];
    if (text) {
      newProducts = newProducts.filter((item) => {
        if (item.name.includes(text.toLowerCase())) {
          return item;
        }
      });
    }
    if (category !== "all") {
      newProducts = newProducts.filter((item) => {
        if (item.category === category) {
          return item;
        }
      });
    }
    if (company !== "all") {
      newProducts = newProducts.filter((item) => {
        if (item.company === company) {
          return item;
        }
      });
    }
    if (color !== "all") {
      newProducts = newProducts.filter((item) => {
        if (item.colors.includes(color)) {
          return item;
        }
      });
    }
    newProducts = newProducts.filter((item) => {
      if (item.price < price) {
        return item;
      }
    });

    if (shipping) {
      newProducts = newProducts.filter((item) => {
        if (item.shipping) {
          return item;
        }
      });
    }

    return { ...state, filtered_products: newProducts };
  }

  return state;
};

export default reducer;
