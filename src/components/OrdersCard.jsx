import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OrdersCard = ({order}) => {

  const priceOptions = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", priceOptions);

  return (
    <div className="col-xl-6 col-md-12 mb-4">
      <Link to={`/admin/orders/${order._id}`} className="link-dark text-decoration-none">
        
      <div className="card shadow-1-strong">
        <div className="card-body">
          <div className="d-flex justify-content-between p-md-1">
            <div className="d-flex flex-row">
              <div className="align-self-center">
                <i className="fas fa-money-check text-danger fa-3x me-4"></i>
              </div>
              <div>
                <h4 style={{ textTransform: 'uppercase'}}>{order.status}</h4>
                <p className="mb-0">{`Fecha: ${order.date.slice(0, 10)}. Hora: ${order.date.slice(11, 19)}`}</p>
              </div>
            </div>
            <div className="align-self-center">
              <h3 className="h3 mb-0">{priceFormat.format(order.total)}</h3>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default OrdersCard;
