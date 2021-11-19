import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/cartSlice";
import { useHistory } from "react-router-dom";
import { selectUser, updateData } from "../features/userSlice";

const SingleProduct = () => {
  const [product, setProduct] = useState({ reviews: [] });
  const [value, setValue] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const starsReview = {
    count: 5,
    color: "black",
    activeColor: "#ffd700",
    size: 24,
    value: value ,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
  
  };



  const addFavorite = async (e) => {
    await axios.post(`/api/users/favorites/add/${product._id}`);
    const res = await axios.get("/api/auth/logged");
    dispatch(updateData(res.data));
  };

  const removeFavorite = async (e) => {
    e.preventDefault();
    await axios.delete(`/api/users/favorites/remove/${product._id}`);
    const res = await axios.get("/api/auth/logged");
    dispatch(updateData(res.data));
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
      {console.log(product)}
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

            {user ? (
              user.favorites.indexOf(product._id) < 0 ? (
                <button
                  className="btn btn-danger shadow-0"
                  style={{ fontSize: "large" }}
                  onClick={addFavorite}
                >
                  <i className="fas fa-heart"></i>
                </button>
              ) : (
                <button
                  className="btn btn-danger shadow-0"
                  style={{ fontSize: "large" }}
                  onClick={removeFavorite}
                >
                  <i class="fas fa-ban"></i>
                </button>
              )
            ) : (
              <>
                <br />
                <br />
                <p>Login to add to favorites!</p>
              </>
            )}
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
