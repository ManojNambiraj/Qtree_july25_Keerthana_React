import React, { useState } from "react";
// import "./ShopppingCart.css";
import ProductCard from "./components/ProductCard";
import img1 from "./assets/images/blueMobile.jpg"
import img2 from "./assets/images/img2.jpg"
import img3 from "./assets/images/img3.jpg"
import img4 from "./assets/images/img4.webp"
import img5 from "./assets/images/img5.webp"
import CartItem from "./components/CartItem";

function ShopppingCart() {
  const data = [
    {
      id: 1,
      pName: "Nokia",
      price: 20000,
      dsec: "Some quick example text to build on the card title and make",
      img: img1,
      isStock: true,
    },
    {
      id: 2,
      pName: "Sony",
      price: 45000,
      dsec: "card title and make Some quick example text to build on the",
      img: img2,
      isStock: false,
    },
    {
      id: 3,
      pName: "Redmi",
      price: 10000,
      dsec: "card title and make Some quick example text to build on the",
      img: img3,
      isStock: true,
    },
    {
      id: 4,
      pName: "Apple",
      price: 250000,
      dsec: "card title and make Some quick example text to build on the",
      img: img4,
      isStock: false,
    },
    {
      id: 5,
      pName: "ViVo",
      price: 25000,
      dsec: "card title and make Some quick example text to build on the",
      img: img2,
      isStock: true,
    },
    {
      id: 6,
      pName: "OPPO",
      price: 17000,
      dsec: "card title and make Some quick example text to build on the",
      img: img5,
      isStock: false,
    },
  ];

  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
    setTotal(total + product.price)
  }

  const handleRemoveFromCart = (item) => {
    const filteredItems = cartItems.filter((cItem) => cItem.id != item.id);
    setCartItems(filteredItems)
    setTotal(total - item.price)
  }
  
  return (
    <div className="main container-fluid">
      <div className="row">
        <div className="left_section col-10">
          <div className="row d-flex gap-4">
            {data.map((product) => {
              return (
                <ProductCard
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        </div>
        <div className="right_section col-2">
          <ol class="list-group list-group-numbered">
            <h4>Count: {cartItems.length}</h4>
            {cartItems.map((item) => {
              return (
                <CartItem
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              );
            })}
            <h3>Total: {total}</h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ShopppingCart;
