import React from "react";
import "./Home.css";
import Product from "../../product/product";

function Home() {
  const products = {
    prod1: {
      id: "1",
      title:
        "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
      price: 19.99,
      img: "https://m.media-amazon.com/images/I/51aEhyjQGrL._AC_SY580_.jpg",
      rating: 5,
    },
    prod2: {
      id: "2",
      title:
        "NORTIV 8 :Men's Military Tactical Work Boots Hiking Motorcycle Combat Boots",
      price: 48.99,
      img: "https://images-na.ssl-images-amazon.com/images/I/41ZOlSBcoIL._AC_SR400,600_.jpg",
      rating: 4,
    },
    prod3: {
      id: "3",
      title:
        "Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)",
      price: 136.99,
      img: "https://m.media-amazon.com/images/I/61gmXNWdZML._AC_UL320_.jpg",
      rating: 4,
    },
    prod4: {
      id: "4",
      title:
        "YSSOA Backrest and Seat Height Adjustable Swivel Recliner Racing Office Computer Ergonomic Video Game Chair, with footrest, Red",
      price: 299,
      img: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_UL320_.jpg",
      rating: 5,
    },
    prod5: {
      id: "5",
      title:
        "Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls",
      price: 39.99,
      img: "https://m.media-amazon.com/images/I/71wrIZujPIL._AC_UL320_.jpg",
      rating: 4,
    },
    prod6: {
      id: "6",
      title:
        "Samsung 49-in Super Ultra-Wide Dual QHD (5120x1440) 120Hz Curved Gaming  Monitor C49RG9 | GameStop",
      price: 1094.98,
      img: "https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX450_.jpg",
      rating: 5,
    },
  };

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
