import React from "react";
import { useStateValue } from "../../../StateProvider/StateProvider";
import "./CheckoutProduct.css";
function CheckoutProduct(props) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="chechoutProduct-img" src={props.image} alt="" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{props.title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
