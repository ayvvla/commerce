import ReactStars from "react-rating-stars-component";
import React from "react";
import { CartContext } from "./contexts/context";

const Productcard = ({ id, title, description, image, rating, price }) => {
  const product = { id, title, description, image, rating, price };
  const {
    state: { cart },
    addToCart,
    removeFromCart,
  } = CartContext();
  return (
    <div className="card">
      <div className="card--image">
        <img src={image} alt="product" />
      </div>
      <div className="card--text">
        <h5>{title}</h5>
        <ReactStars
          count={5}
          size={20}
          value={rating.rate}
          color="#6c6cf0"
          activeColor="blue"
        />
        <small>{description}</small>
        <p>{price}$</p>
        {cart.some((c) => c.id === product.id) ? (
          <button
            className="remove card--button"
            onClick={() => removeFromCart(product)}
          >
            Remove From Cart
          </button>
        ) : (
          <button className="add card--button" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Productcard;
