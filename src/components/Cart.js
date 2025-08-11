import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQty, decrementQty, removeFromCart } from "../redux/cartReducer";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);

  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  if (items.length === 0) return <div className="p-3"><h4>Cart is empty</h4></div>;

  return (
    <div className="container mt-3">
      <h3>Your Cart</h3>
      <ul className="list-group mb-3">
        {items.map((it) => (
          <li className="list-group-item d-flex align-items-center" key={it.id}>
            <img src={it.image} alt={it.title} style={{ height: 60, objectFit: "contain" }} />
            <div className="ms-3 me-auto">
              <div>{it.title}</div>
              <div className="text-muted">${it.price} each</div>
            </div>

            <div className="d-flex align-items-center">
              <button className="btn btn-sm btn-outline-secondary me-1" onClick={() => dispatch(decrementQty(it.id))}>-</button>
              <span className="px-2">{it.quantity}</span>
              <button className="btn btn-sm btn-outline-secondary ms-1" onClick={() => dispatch(incrementQty(it.id))}>+</button>
            </div>

            <div className="ms-3">
              <strong>${(it.price * it.quantity).toFixed(2)}</strong>
            </div>

            <button className="btn btn-sm btn-danger ms-3" onClick={() => dispatch(removeFromCart(it.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between align-items-center">
        <h5>Total: ${total.toFixed(2)}</h5>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
}
