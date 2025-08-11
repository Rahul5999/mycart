const initialState = {
  items: [] // each: { id, title, price, image, quantity }
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const prod = action.payload;
      const exist = state.items.find((i) => i.id === prod.id);
      if (exist) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === prod.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...prod, quantity: 1 }] };
    }

    case "INCREMENT_QTY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };

    case "DECREMENT_QTY":
      return {
        ...state,
        items: state.items
          .map((i) => (i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i))
          .filter((i) => i.quantity > 0),
      };

    case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };

    default:
      return state;
  }
};

// actions
export const addToCart = (product) => ({ type: "ADD_TO_CART", payload: product });
export const incrementQty = (id) => ({ type: "INCREMENT_QTY", payload: id });
export const decrementQty = (id) => ({ type: "DECREMENT_QTY", payload: id });
export const removeFromCart = (id) => ({ type: "REMOVE_FROM_CART", payload: id });
