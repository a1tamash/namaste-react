import React from "react";
import ReactDOM from "react-dom/client";

/**
 *  Header
 *    - Logo
 *    - Nav Items
 *  Body
 *    - Search
 *    - RestaurantContainer
 *      - Restaurant Card
 *        - Img
 *        - Name of res, cusines , star rating , delivery time , etc.
 *  Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact
 **/

// latest push
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.pngkey.com/png/detail/382-3827394_order-online-logo-ideas-online-food-ordering.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const RestaurantCard = () => {};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">// Restaurant Cards</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
