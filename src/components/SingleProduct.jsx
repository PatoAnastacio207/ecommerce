import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux"
import { add } from "../features/cartSlice"

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch()

  const starsReview = {
    count: 5,
    color: "black",
    activeColor: "#ffd700",
    size: 24,
    value: 10,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      console.log(`Example 2: new value is ${newValue}`);
    }
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  useEffect(() => {
    axios.get(`/api/products/id/${id}`).then(({ data }) => setProduct(data));
  }, []);

  const priceOptions = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", priceOptions);

  const handleCart = (e) => {
    // e.preventDefault();
    axios
      .post("/api/cart/add", { _id: product._id, quantity: 1 })
      .then(() => dispatch(add({ product, quantity: 1 })))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <br />
      <br />
      {product ? (
        <div className="row" style={{ fontFamily: "Bebas Neue" }}>
          <div
            style={{ maxWidth: "50%" }}
            className="col-sm-6 card d-flex justify-content-between shadow-1-strong"
          >
            <img src={product.imgUrl} alt={product.name} />
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-5" style={{ padding: "10px" }}>
            <h2>{product.name}</h2>
            <hr style={{ margin: "5px" }} />
            <p>
              <b>Descrition:</b>
            </p>
            <p>{product.description}</p>
            <br />
            <ReactStars {...starsReview} />
            <hr style={{ margin: "5px" }} />
            <h3>{priceFormat.format(product.price)}</h3>
            <Link
              onClick={handleCart}
              to="/cart"
              className="btn btn-success shadow-0"
              style={{ marginRight: "15px", fontSize: "large" }}
            >
              Buy now
            </Link>
            <button
              onClick={handleCart}
              className="btn btn-dark shadow-0"
              style={{ marginRight: "15px", fontSize: "large" }}
            >
              <i className="fas fa-shopping-cart"></i>
            </button>
            <button
              className="btn btn-danger shadow-0"
              style={{ fontSize: "large" }}
            >
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      ) : (
        <span></span>
      )}
      <br />
    </div>
  );
};

export default SingleProduct;
