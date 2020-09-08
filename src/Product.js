import React from "react";
import "./Product.css";
const Product = ({ title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <small>{price}</small>
        </p>
        <div className="product__rating">
          <p>
            <span aria-label="star" role="img">
              ⭐
            </span>
          </p>
        </div>
      </div>
      <img src={image} alt="" />
      <button className="">Add to Basket</button>
    </div>
  );
};

export default Product;
