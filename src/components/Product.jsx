import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
  }, []); // Add an empty dependency array to ensure the effect runs only once

  return (
    <>
      {products.map((product) => (
        <Card key={product.id} style={{ width: "18rem", marginBottom: "10px" }}>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "300px" }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description.substring(0, 100)}...</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Product;
