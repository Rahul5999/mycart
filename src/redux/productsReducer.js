import axios from "axios";

const initialState = {
  allProducts: [],
  loading: false,
  error: null,
  searchQuery: "",
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_LOADING":
      return { ...state, loading: true, error: null };
    case "SET_PRODUCTS":
      return { ...state, allProducts: action.payload, loading: false };
    case "PRODUCTS_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

// Thunk to fetch products from backend
export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: "PRODUCTS_LOADING" });
  try {
    const res = await axios.get("http://localhost:8080/products");
    dispatch({ type: "SET_PRODUCTS", payload: res.data });
  } catch (err) {
    dispatch({ type: "PRODUCTS_ERROR", payload: err.message });
  }
};

// action creator for search
export const setSearchQuery = (query) => ({ type: "SET_SEARCH_QUERY", payload: query });
