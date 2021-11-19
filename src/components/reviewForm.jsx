import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useInput } from "../hooks/custom-hooks";

const Review = () => {
  const user = useSelector(selectUser);
  const location = useLocation();
  const item = location.state.reviewItem;
  const orderId = location.state.reviewId;
  const [valoration, setValoration] = useState(0);
  const message = useInput("");
  const history = useHistory();

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
    onChange: (newValue) => {
      setValoration(newValue);
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/products/reviews/add", {
        orderId: orderId,
        user,
        productId: item.productId,
        review: {
          valoration: valoration,
          message: message.value,
        },
      })
      .then(() => history.push("/myOrders"));
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h2 className="fw-light titleNoMain">My Review</h2>
      <form
        className="container col-sm-3 shadow-2-strong rounded"
        style={{ fontFamily: "Bebas Neue" }}
        onSubmit={handleSubmit}
      >
        <br />
        <div className="row">
          <div className="col-sm-12">
            <label for="name">Producto</label>
            <input
              type="text"
              className="form-control"
              value={item.name}
              disabled
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12">
            <label for="mensaje">Mensaje</label>
            <br />
            <textarea
              className="textarea form-control"
              required
              {...message}
            ></textarea>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12">
            <label for="month" required>
              Valoracion
            </label>{" "}
            <ReactStars {...starsReview} />
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <input
              type="submit"
              className="btn btn-danger"
              value="Save Change"
            />
            <br />
            <br />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default Review;
