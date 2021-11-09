import React, { useState, useEffect } from "react";
import axios from 'axios'


const SingleProduct = () => {

  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => res.data)
      .then((pr) => {
        setProduct(pr);
        
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div>
    {product ?
      (<main class="col-sm-6">
        <article class="content-body">
          <h3 class="title">{product.name}</h3>
          <div class="rating-wrap mb-3">
            <span class="badge badge-warning">
              {" "}
              <i class="fa fa-star"></i> 3.8
            </span>
            <small class="text-muted ml-2">45 reviews</small>
          </div>
          <p>
            Here goes description consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco{" "}
          </p>
  
          <ul class="list-check mb-4">
            <li>Best performance of battery</li>
            <li>5 years warranty for this product</li>
            <li>Best performance of battery</li>
          </ul>
  
          <div class="item-option-select">
            <h6>Model</h6>
            <div
              class="btn-group btn-group-sm btn-group-toggle"
              data-toggle="buttons"
            >
              <label class="btn btn-light active">
                <input type="radio" name="radio_size" checked /> Xs
              </label>
              <label class="btn btn-light">
                <input type="radio" name="radio_size" /> Xs Max
              </label>
            </div>
          </div>
  
          <div class="item-option-select">
            <h6>Color</h6>
            <div
              class="btn-group btn-group-sm btn-group-toggle"
              data-toggle="buttons"
            >
              <label class="btn btn-light">
                <input type="radio" name="radio_color" /> Silver
              </label>
              <label class="btn btn-light active">
                <input type="radio" name="radio_color" checked /> Gray
              </label>
              <label class="btn btn-light">
                <input type="radio" name="radio_color" /> Gold
              </label>
            </div>
          </div>
  
          <div class="item-option-select">
            <h6>Capacity</h6>
            <div
              class="btn-group btn-group-sm btn-group-toggle"
              data-toggle="buttons"
            >
              <label class="btn btn-light active">
                <input type="radio" name="options" checked /> 64 GB
              </label>
              <label class="btn btn-light">
                <input type="radio" name="options" /> 256 GB
              </label>
              <label class="btn btn-light">
                <input type="radio" name="options" /> 512 GB
              </label>
            </div>
          </div>
  
          <div class="row mt-3 align-items-center">
            <div class="col">
              <span class="price h4">${product.price}</span>
            </div>
            <div class="col text-right">
              <a href="#" class="btn  btn-primary">
                {" "}
                <span class="text">Add to cart</span>{" "}
                <i class="icon fas fa-shopping-cart"></i>{" "}
              </a>
              <a href="#" class="btn  btn-light">
                {" "}
                <i class="fas fa-heart"></i>{" "}
              </a>
              <a href="#" class="btn  btn-light">
                {" "}
                <i class="fa fa-folder-plus"></i>{" "}
              </a>
            </div>
          </div>
        </article>
      </main>) : (<span></span>) }
    </div>
  );
};

export default SingleProduct;
