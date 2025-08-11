import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`) // ✅ fixed backticks
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="p-3">Loading...</p>;

  return (
    <div className="p-3">
      <h4>{product.title}</h4>
      <img
        src={product.image}
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
        className="mb-3"
      />
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
    </div>
  );
}

export default ProductDetails;
