import React from "react";
// import Products from "./Products";
import Productcard from "./Productcard";
import { CartContext } from "./contexts/context";
import Products from "./Products";

const Product = () => {
  const { state : {products, cart} } = CartContext();
  console.log(products , cart)

  return (
    <section className="product">
      {
        products.map((product) => (
          <section key={product.id}>
            <Productcard {...product} />
          </section>  
        ))
      }
    </section>
  );
};

export default Product;
