import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  // Fetch data using axios
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="product-container">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img-wrapper">
              <img
                src={product.image}
                alt={product.title}
                className="product-img"
              />
              <span className="price-tag">${product.price}</span>
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">
                {product.description.substring(0, 50)}...
              </p>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
