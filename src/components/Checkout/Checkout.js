import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <div className="checkout-title">
          <h2>Shopping Cart </h2>
        </div>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
