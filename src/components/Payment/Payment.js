import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import { Link,useNavigate } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../StateProvider/reducer";
import axios from "../../axios";
function Payment() {
  const [{ basket, user }] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    // generate the special stripe secret which allow us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket)*100}`,
      });
      setClientSecret(response.data.clientSecret)
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payLoad = await stripe.confirmCardPayment(clientSecret,{
        payment_method : {
            card : elements.getElement(CardElement)
        }
    }).then(({paymentIntent}) =>{  // geting payment confirmation
        setSucceeded(true);
        setError(null)
        setProcessing(false)
        navigate('/orders')
    }) 
  };
  const handleChange = (e) => {
    // listen for changes in the caedElement
    // and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <h1>Checkout ({<Link to="/checkout">{basket?.length} items</Link>})</h1>
      <div className="payment-container">
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Adress</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 Lane</p>
            <p>Cairo,Egypt</p>
          </div>
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-item">
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
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
