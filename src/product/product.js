/* eslint-disable no-unused-vars */
import React from "react";
import "./product.css";
import { useStateValue } from "../StateProvider/StateProvider";
function product(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{props.title}</p>
        <div className="product-price">
          <small>$</small>
          <strong>{props.price}</strong>
          <div className="product-rating">
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <p key={i}>&#11088;</p>
              ))}
          </div>
        </div>
      </div>
      <img src={props.image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default product;
