import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AdminSidebar from './AdminSidebar'

const SingleOrder = () => {
  const [order, setOrder] = useState([]);

  const { id } = useParams();

console.log(id)

  useEffect(() => {
    axios
      .get(`/api/checkout/order/${id}`)
      .then((res) => {
        console.log('ORDERRRRRRRRRRRRR',res)
        return res.data
      })
      .then((order) => {
        setOrder(order)})
        .catch(err => console.log(err))
        console.log('ORDERRRRRRRRRRRRR',order)
  }, []);

  
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
              <div className="container row card border shadow-0 rounded">
      <h1>hola</h1>
                <div className="container col sm-6" style={{height: "400px"}}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleOrder;
