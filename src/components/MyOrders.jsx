import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const MyOrders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/checkout/myorders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="container col-sm-6">
      <h2 className="fw-light titleNoMain">All my orders</h2>
      {orders.map(({ items, date, status, _id }, i) => (
        <div class="accordion" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id={`flush-heading${_id}`}>
              <button
                class="accordion-button collapsed"
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
            class="accordion-collapse collapse"
            aria-labelledby={`flush-heading${_id}`}
            data-mdb-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div>
                <table class="table">
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
                        <td><Link className="btn btn-warning shadow-0" to="/myreview"><i className="fas fa-pen"></i></Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
