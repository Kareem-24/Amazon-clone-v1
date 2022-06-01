import React from "react";
import "./Home.css";
import Product from "../../product/product";
import { products } from "../../utils/data";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-img"
          src={require("../../images/background.jpg")}
          alt=""
        />
        <div className="home-row">
          
          <Product
            id={products.prod1.id}
            title={products.prod1.title}
            price={products.prod1.price}
            image={products.prod1.img}
            rating={products.prod1.rating}
          />

          <Product
            id={products.prod2.id}
            title={products.prod2.title}
            price={products.prod2.price}
            image={products.prod2.img}
            rating={products.prod2.rating}
          />

          <Product
            id={products.prod3.id}
            title={products.prod3.title}
            price={products.prod3.price}
            image={products.prod3.img}
            rating={products.prod3.rating}
          />
        </div>
        <div className="home-row">
          <Product
            id={products.prod4.id}
            title={products.prod4.title}
            price={products.prod4.price}
            image={products.prod4.img}
            rating={products.prod4.rating}
          />
          <Product
            id={products.prod5.id}
            title={products.prod5.title}
            price={products.prod5.price}
            image={products.prod5.img}
            rating={products.prod5.rating}
          />
        </div>
        <div className="home-row">
          <Product
            id={products.prod6.id}
            title={products.prod6.title}
            price={products.prod6.price}
            image={products.prod6.img}
            rating={products.prod6.rating}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
