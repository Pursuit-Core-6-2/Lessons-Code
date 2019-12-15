import React from "react";

const ProductItem = (props) => {

  const handleClick = () => {
    let itemName = props.name;
    props.handleBuyClick(itemName)
  }

  return (
    <li>
      {props.name} - {props.manufacturer} - ${props.price} - #{props.qty}
      <button onClick={handleClick}>Buy</button>
    </li>
  );
};

export default ProductItem;
