import React from "react";
import PropTypes from "prop-types";

require("./ProductList.scss");
const ProductsList = ({ children }) => (
  <div className="productList">
    <div>{children}</div>
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node
};

export default ProductsList;
