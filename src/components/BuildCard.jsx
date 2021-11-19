import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const BuildCard = ({ product, position ,setPosition }) => {
  const priceOptions = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", priceOptions);

  const handleClick = () => {
    localStorage.setItem(product.category.type, JSON.stringify(product));
    setPosition(position + 1)
    console.log(localStorage)
  };



  return (
    <>
      <div className="col">
        <div
          onClick={handleClick}
          className="card hover-shadow border"
          style={{ fontFamily: "Bebas Neue" }}
        >
          <div className="bg-image hover-overlay ripple ">
            <img src={product.imgUrl} className="img-fluid" />

            <div className="mask"></div>
          </div>

          <div className="card-body">
            <h5 class="card-title">{product.name}</h5>

            <p className="card-text text-muted">
              {product.category?.name} / {product.category?.type}
            </p>
            <div className="d-flex justify-content-between">
              <h4>{priceFormat.format(product.price)}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildCard;
