import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsReducer";
import { addToCart } from "../redux/cartReducer";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function ProductsRedux() {
  const dispatch = useDispatch();
  const { allProducts, loading, error, searchQuery } = useSelector((s) => s.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filtered = allProducts.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p className="p-3">Loading...</p>;
  if (error) return <p className="p-3 text-danger">Error: {error}</p>;

  return (
    <div>
      <SearchBar />
      <div className="row row-cols-1 row-cols-md-2 g-3">
        {filtered.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100 p-2">
              <img
                src={product.image}
                alt={product.title}
                style={{ height: "160px", objectFit: "contain" }}
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="fw-bold">${product.price}</p>
                <div className="mt-auto d-flex justify-content-between">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </button>
                  <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
