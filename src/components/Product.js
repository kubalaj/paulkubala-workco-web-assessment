import React from "react";
import PropTypes from "prop-types";

require("./Product.scss");
const Product = ({ price, inventory, title }) => (
  <div className="product">
    <div className="row">
      <div className="col-33">pic</div>
      <div className="col-66">
        <div className="row">
          <div className="col-50">
            <span className="title">{title}</span>
          </div>
          <div className="col-50">
            <span className="price">&#36;{price}</span>
          </div>
        </div>
        <div className="row">
          <span className="inventory">
            {inventory ? ` ${inventory} reamining` : null}
          </span>
        </div>
      </div>
    </div>
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
};

export default Product;
