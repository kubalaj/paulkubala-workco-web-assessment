import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

require("../styles/main.scss");
const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
);

export default App;
