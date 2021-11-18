import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";

const MyOrders = () => {
  const user = useSelector(selectUser);
  const [orders, setOrders] = useState([]);
  // console.log("orders", orders)

  useEffect(() => {
    axios.get("/api/checkout/myorders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div>
      {orders.map(({ items, date, status, _id }) => (
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id={`heading${_id}`}>
              <button
                class="accordion-button"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target={`#collapse${_id}`}
                aria-expanded="true"
                aria-controls={`collapse${_id}`}
              >
                ORDER:   {status}
              </button>
            </h2>
          </div>
          <div
            id={`collapse${_id}`}
            class="accordion-collapse collapse show"
            aria-labelledby={`heading${_id}`}
            data-mdb-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div>
           
                {items.map((item) => (
                  <tr className="d-flex justify-content-center">
                    <th scope="row">{item.name}</th>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{date.slice(0, 10)}</td>
                  </tr>
                ))}
              </div>
            </div>
          </div>

          {/* <table class="table align-middle">
       
        <tbody>
          {orders.map(({ items, date,status }) => (
            <div>
               <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
              {items.map((item) => (
                <tr>
                  <th scope="row">{item.name}</th>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{date.slice(0, 10)}</td>
                </tr>
              ))}
            </div>
          ))}
        </tbody>
      </table>
    </div> */}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
