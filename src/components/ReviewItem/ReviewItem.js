import React from "react";

const ReviewItem = (props) => {
  const { handleRemove } = props;
  const { name, price, quantity, key } = props.product;
  return (
    <div className="product">
      <div>
        <h2 className="product-name">{name}</h2>
        <h3>price:{price}</h3>
        <h4>quantity:{quantity}</h4>

        <button onClick={() => handleRemove(key)} className="btn-regular">
          remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
