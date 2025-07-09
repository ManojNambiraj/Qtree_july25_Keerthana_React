import React from "react";
import img1 from "../assets/images/blueMobile.jpg";

function ProductCard(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.product.img}
        className="card-img-top"
        style={{ height: "300px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.pName}</h5>
        <h6 className="card-title">{props.product.price}</h6>
        <p className="card-text">{props.product.dsec}</p>
        <p>{props.product.isStock ? "-in stock" : "-out of stock"}</p>
        <button
          className="btn btn-primary"
          disabled={!props.product.isStock}
          onClick={() => {props.handleAddToCart(props.product);}}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
