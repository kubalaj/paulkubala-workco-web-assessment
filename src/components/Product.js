import React from "react";
import PropTypes from "prop-types";

require("./Product.scss");
const Product = ({ price, inventory, title }) => (
  <div>
    {title} - &#36;{price}
    {inventory ? ` x ${inventory}` : null}
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
};

export default Product;
