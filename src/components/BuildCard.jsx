import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../features/cartSlice";
import axios from 'axios'



const BuildCard = ({product}) => {
  const priceOptions = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", priceOptions);
  const dispatch = useDispatch();

  const handleCart = (e) => {
    e.preventDefault();
    axios
      .post("/api/cart/add", { _id: product._id, quantity: 1 })
      .then(() => dispatch(add({ product, quantity: 1 })))
      .catch((err) => console.error(err));
  };

  return (
    <>
        <div className="col">
          <div
            className="card hover-shadow border"
            style={{ fontFamily: "Bebas Neue" }}
          >
            <Link to={'/'}>
              <div className="bg-image hover-overlay ripple ">
                <img src={product.imgUrl} className="img-fluid" />
                <a href="/">
                  <div className="mask"></div>
                </a>
              </div>
            </Link>
            <div className="card-body">
              <Link to={'/'} className="link-dark text-decoration-none">
                <h5 className="card-title">{product.name}</h5>
              </Link>
              <p className="card-text text-muted">
                {product.category?.name} / {product.category?.type}
              </p>
              <div className="d-flex justify-content-between">
                <h4>{priceFormat.format(product.price)}</h4>

                
                  <button
                    className="btn btn-dark shadow-0"
                    onClick={handleCart}
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </button>
              
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default BuildCard;
