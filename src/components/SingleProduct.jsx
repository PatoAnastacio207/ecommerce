import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/cartSlice";
import Notification from "../utils/Notification";
import { selectUser, updateData } from "../features/userSlice";

const SingleProduct = () => {
  const [product, setProduct] = useState({ reviews: [] });
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

 
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
  
    axios
      .post("/api/cart/add", { _id: product._id, quantity: 1 })
      .then(() => dispatch(add({ product, quantity: 1 })))
      .then(() => Notification.successMessage("Producto en el carrito"))
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
            <p>
              {product.reviews.map((res) => (
                <span class="fa fa-star checked">{res.valoration}</span>
              ))}
            </p>

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
      <br /> <br /> <br /> <br /> <br />
      <div className="row">
        {product.reviews.map((one) => (
          <div class="col-sm-4" style={{ maxWidth: "23rem" }}>
            <div class="card">
              <div class="card-body">
                <blockquote class="blockquote blockquote-custom bg-white px-3 pt-4">
                  <div class="blockquote-custom-icon bg-info shadow-1-strong">
                    <i class="fa fa-quote-left text-white"></i>
                  </div>

                  <p class="mb-0 mt-2 font-italic">{one.message}</p>
                  <p class="mb-0 mt-2 font-italic">
                    {" "}
                    <span class="fa fa-star checked">
                      {one.valoration || 0}
                    </span>
                  </p>
                  <footer class="blockquote-footer pt-4 mt-4 border-top">
                    <cite title="Source Title"> {one.authorName}</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default SingleProduct;
