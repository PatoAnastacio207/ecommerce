import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Link, Redirect } from "react-router-dom";

import imagen from "../assets/caballoGrinder.png";
const MyOrders = () => {
  const user = useSelector(selectUser);
  const [orders, setOrders] = useState([]);
  const [value, setValue] = useState(false);
  const [reviewItem, setReviewItem] = useState("");
  const [reviewId, setReviewId] = useState("");

  useEffect(() => {
    axios.get("/api/checkout/myorders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="container col-sm-6">
      {value ? (
        <Redirect
          to={{ pathname: "/myreview", state: { reviewItem, reviewId } }}
        />
      ) : null}
      <h2 className="fw-light titleNoMain">All my orders</h2>
      <br />
      {orders.length !== 0 ? (
        orders.map(({ items, date, status, _id }, i) => (
          <div className="accordion" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id={`flush-heading${_id}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target={`#flush-collapse${_id}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${_id}`}
                  key={i}
                >
                  {` ORDER ${i + 1}:   ${status}`}
                </button>
              </h2>
            </div>
            <div
              id={`flush-collapse${_id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-heading${_id}`}
              data-mdb-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr>
                          <th scope="row">{item.name}</th>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>{date.slice(0, 10)}</td>
                          <td>
                            <button
                              className="btn btn-warning shadow-0"
                              onClick={() => {
                                setValue(true);
                                setReviewItem(item);
                                setReviewId(_id);
                              }}
                            >
                              <i className="fas fa-pen"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="container">
          <div className="row d-flex justify-content-center">
            <h1
              className="d-flex justify-content-center"
              style={{ fontFamily: "Bebas Neue" }}
            >
              Hey Dummie! Aun no hay compras
            </h1>
            <img src={imagen} style={{ maxWidth: "30%" }}></img>
          </div>
          <br />
          <div className="row  d-flex justify-content-center">
            <div className="col-sm-4">
              <Link
                to="/allproducts"
                className="mainButton text-decoration-none link-dark d-flex justify-content-center"
              >
                Comprar
              </Link>
            </div>
          </div>
        </div>
      )}
     
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MyOrders;
