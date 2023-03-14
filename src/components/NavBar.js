import React from "react";
import { GiShoppingCart } from 'react-icons/gi'

const NavBar = ({setVisibility}) => {
  return (
    <section className="navbar">
      <h1>LOGO</h1>
      <div ><GiShoppingCart 
        size= '2em' 
        className="cart--icon" 
        onClick={() => setVisibility(pre => !pre)}
        
      />
       {/* {products.length > 0 && <span className="navbar--small">{products.length}</span>} */}
      </div>
      
     

    </section>
  );
};

export default NavBar;
