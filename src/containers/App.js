import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

require("../styles/main.scss");
const App = () => (
  <div>
    <div className="row">
      <div className="col-50">
        <h2>Acme Store</h2>
      </div>
      <div className="col-50">
        <CartContainer />
      </div>
    </div>
    <div className="row">
      <ProductsContainer />
    </div>
  </div>
);

export default App;
