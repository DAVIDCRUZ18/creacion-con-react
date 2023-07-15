import React, { useContext , useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import "./productDetails.css";
import axios from 'axios';

export const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  // Find the product with the given ID
  const product = PRODUCTS.find((p) => p.id === Number(id));

  const [DescripcionData, setDescricionData] = useState([]);

  useEffect(() => {
    const fetchDescripcion = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:4200/Producto/`);
        if (response.status !== 200) {
          console.error('Error: API response status is', response.status);
          return;
        }
        console.log(response.data);
        setDescricionData(response.data);
      } catch (error) {
        console.error('Network error:', error);
      }
    }
    fetchDescripcion();
  }, [id]);

  // If the product doesn't exist, return an error message
  if (!product) {
    return <div>Product not found</div>;
  }
  
  // If the product exists, render its details
  const { productName, productImage, price } = product;

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img src={productImage} alt={productName} className="product-image" />
      </div>
      <div className="product-details-container">
        <h1 className="product-name">{productName}</h1>
        <div className="product-details">
          <p><b>ID:</b> {id}</p>
          <p><b>Price:</b> ${price}</p>
          {DescripcionData.length > 0 && (
            <p><b>Description:</b> {DescripcionData[Math.floor(Math.random() * DescripcionData.length)].descripcion}</p>
          )}
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
      </div>
    </div>
  );
}