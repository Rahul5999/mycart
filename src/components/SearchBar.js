import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/productsReducer";

export default function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.products.searchQuery);

  return (
    <input
      className="form-control mb-3"
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
    />
  );
}
