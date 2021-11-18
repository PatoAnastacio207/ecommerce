import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import AdminSidebar from './AdminSidebar'

const SingleOrder = () => {
  const [order, setOrder] = useState([]);

  const { id } = useParams;

  useEffect(() => {
    axios
      .get(`/api/checkout/order/${id}`)
      .then((res) => res.data)
      .then((order) => setOrder(order));
  });

  return (
    <div className="row">
      <div className="col-sm-2">
        <AdminSidebar />
      </div>
      <div className="col-sm-1">
        <span></span>
      </div>
      <main className="col-sm-9">
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
              <div className="container card border shadow-0"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleOrder;
