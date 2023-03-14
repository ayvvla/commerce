import React, { useState } from "react";
import Navbar from "./components/NavBar.js";
import Product from "./components/Product.js";
import ShoppingCart from "./components/ShoppingCart.js";

const App = () => {
  const [visibility, setVisibility] = useState("");

  return (
    <div>
      <Navbar setVisibility={setVisibility} />
      <ShoppingCart visibility={visibility} setVisibility={setVisibility} />
      <Product />
    </div>
  );
};

export default App;
