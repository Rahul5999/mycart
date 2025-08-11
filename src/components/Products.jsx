import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="row">
      {/* Left side: Product list */}
      <div className="col-md-6">
        <h3>All Products</h3>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text fw-bold">${product.price}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-success btn-sm">
                      Add to Cart
                    </button>
                    <Link
                      to={`${product.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Product Details if route matches */}
      <div className="col-md-6">
        {/* Show details only if nested route matches */}
        {location.pathname !== "/products" && <Outlet />}
      </div>
    </div>
  );
}
