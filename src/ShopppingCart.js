import React from "react";
// import "./ShopppingCart.css";
import ProductCard from "./components/ProductCard";

function ShopppingCart() {
  return (
    <div className="main container-fluid">
      <div className="row">
        <div className="left_section col-10">
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="right_section col-2"></div>
      </div>
    </div>
  );
}

export default ShopppingCart;
