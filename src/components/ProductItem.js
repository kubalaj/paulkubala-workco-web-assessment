import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

require("./ProductItem.scss");
const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="productCard">
    <div className="row content">
      <div className="col-33 pic">pic</div>
      <div className="col-66">
        <div className="row">
          <Product
            title={product.title}
            price={product.price}
            inventory={product.inventory}
          />
        </div>
        <div className="row">
          <button
            onClick={onAddToCartClicked}
            disabled={product.inventory > 0 ? "" : "disabled"}
          >
            {product.inventory > 0 ? "Add to cart" : "Sold Out"}
          </button>
        </div>
      </div>
    </div>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default ProductItem;
