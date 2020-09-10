import React from "react";
import "./CheckoutProduct.css";


const CheckoutProduct = ({ id, image, title, price, rating }) => {

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <span aria-label="star" role="img">
                  ⭐
                </span>
              </p>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
