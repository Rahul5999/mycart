import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "./logo.png";

const Header = () => {
  // Get total cart item count from Redux
  const count = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Logo & Brand */}
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Logo" width="30" height="30" className="me-2" />
        MyStore
      </Link>

      {/* Mobile menu toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navigation Links */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/users">Users</Link>
          <Link className="nav-item nav-link" to="/products">Products</Link>
          <Link className="nav-item nav-link" to="/cart">
            Cart {count > 0 && `(${count})`}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
