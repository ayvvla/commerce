import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "./contexts/context";

const ShoppingCart = ({ visibility, setVisibility }) => {
  const { state : {cart} , removeFromCart, updateQuantity} = CartContext()  
  
  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(
      cart.reduce((arr,curr) => arr + (curr.price * curr.qty),0)
    )
    
  }, [cart])

  return (
    <section
      className="modal"
      style={{ display: visibility ? "block" : "none" }}
    >
      <div className="shoppingCart">
        <div className="header">
          <h2>Shopping Cart</h2>
          <button
            className="btn close--btn"
            onClick={() => setVisibility(false)}
          >
            <AiFillCloseCircle size={30} />{" "}
          </button>
        </div>
        <div className="cart--products">
          {cart.length === 0 && (
            <span className="empty--text"> Your cart is currently empty</span>
          )}
          {cart.map((product) => {
            return (
              <div className="cart--product" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="cart--image"
                  style={{ width: "70px" }}
                />
                <div className="product--info">
                  <h3 style={{ width: "250px", fontSize: ".8rem" }}>
                    {product.title}
                  </h3>
                  <span>
                    ${product.price * +(product.qty)}
                  </span>
                </div>
                <select
                  value={product.qty}
                  onChange = {(e) => updateQuantity(e,product)}
                >
                {
                  [...Array(10).keys()].map((num) => (
                    <option key={num + 1}>{num + 1}</option>
                  ))
                }
                </select>
              
                <button
                  className="btn remove-btn"
                  onClick={() => removeFromCart(product)}
                >
                  <RiDeleteBin6Line size={25} />
                </button>
              </div>
            );
          })}
        </div>
        Total : ${!total ? 0 : total.toFixed(2)}
      </div>
    </section>
  );
};

export default ShoppingCart;
