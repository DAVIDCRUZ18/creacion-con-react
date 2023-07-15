import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { Container } from "react-bootstrap"; 
import "./shop.css";

export const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error] = useState(null);
  
  useEffect(() => {
    setTimeout(() => {
      setProducts(PRODUCTS);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <div className="shop">Loading...</div>;
  }

  if (error) {
    return <div className="shop">Error: {error}</div>;
  }

  if (products.length === 0) {
    return (
      <div className="shop">
        <div className="shopTitle">
          <h1>Lunatiks bikes</h1>
        </div>
        <div className="no-products">No products available.</div>
      </div>
    );
  }

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Lunatiks bikes</h1>
      </div>
      <Container fluid> 
          <div className="products">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      </Container>
      
    </div>
  );
};

