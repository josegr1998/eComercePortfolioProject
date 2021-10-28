const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, amount, color, product } = action.payload;

    const tempItem = state.cart.find((item) => {
      if (item.id === id + color) {
        return item;
      }
    });

    if (tempItem) {
      const newCart = state.cart.map((item) => {
        if (tempItem.id === item.id) {
          item.amount += amount;
          return item;
        } else {
          return item;
        }
      });

      return { ...state, cart: newCart };
    } else {
      const newItem = {
        id: id + color,
        img: product.images[0].url,
        color,
        name: product.name,
        price: product.price,
        amount,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === "TOGGLE_AMOUNT") {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        if (action.payload.type === "inc") {
          item.amount++;
          if (item.amount > item.max) {
            item.amount = item.max;
          }
          return item;
        }
        if (action.payload.type === "dec") {
          item.amount--;
          if (item.amount < 1) {
            item.amount = 1;
          }
          return item;
        }
      } else {
        return item;
      }
    });
    return { ...state, cart: newCart };
  }

  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => {
      if (item.id !== action.payload) {
        return item;
      }
    });
    return { ...state, cart: newCart };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "GET_CART_TOTAL") {
    const totals = state.cart.reduce(
      (total, item) => {
        const { price, amount } = item;
        total.totalAmount += price * amount;

        total.totalItems += amount;

        return total;
      },
      {
        totalAmount: 0,
        totalItems: 0,
      }
    );
    const { totalAmount, totalItems } = totals;
    return { ...state, total_amount: totalAmount, total_items: totalItems };
  }
};

export default reducer;
