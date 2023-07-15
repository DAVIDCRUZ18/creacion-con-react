import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { ShopContext } from "../../context/shop-context";
import './cart-item.css';

export const CartItem = ({ data: { id, productName, price, productImage } }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price.toLocaleString()}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            type="number"
            value={cartItems[id]}
            onChange={(e) => {
              const count = Number(e.target.value);
              if (Number.isInteger(count) && count >= 0) {
                updateCartItemCount(count, id);
              }
            }}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};
