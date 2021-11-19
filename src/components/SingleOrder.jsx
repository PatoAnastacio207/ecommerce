import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const SingleOrder = () => {
  const [order, setOrder] = useState({});
  const [userOrder, setUserOrder] = useState({});

  const priceOptions = { style: "currency", currency: "USD" };
  const priceFormat = new Intl.NumberFormat("en-US", priceOptions);

  const { id } = useParams();

  const handleChange = (status) => {
    console.log(status)
    axios
      .put(`/api/checkout/update/${id}`, { status })
      .then(res => setOrder(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    axios
      .get(`/api/checkout/order/${id}`)
      .then(({ data }) => {
        setOrder(data);
        axios
          .get(`/api/users/single/${data.userId}`)
          .then(({ data }) => setUserOrder(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
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
        <br />
        <br />
        <div className="container row border shadow-0 rounded d-flex justify-content-between">
          <div className="container">
            <br />
            <h4 style={{ textTransform: "uppercase" }}>
              Estado actual de la orden: <strong>{order.status}</strong>
            </h4>
            {order.status === 'pending' ? (
              <>
            <button className="btn btn-lg btn-success shadow-0 me-3" value="completed" onClick={() => handleChange("completed")}>
              <i className="fas fa-check"></i>
            </button>
            <button className="btn btn-lg btn-danger shadow-0" value="rejected" onClick={() => handleChange("rejected")}>
              <i className="fas fa-times"></i>
            </button>
            </>) : (null)}
            <br />
            <br />
          </div>
          <div className="container card border shadow-0 mt-4 col-sm-4">
            <div className="container card-title m-3">
              <h3>Información del cliente:</h3>
            </div>
            <div className="container card-body">
              <ul className="list-group-flush">
                <li className="list-group-item">
                  <h6>{`Nombre: ${userOrder.firstName} ${
                    userOrder.lastName || null
                  }`}</h6>
                </li>
                <li className="list-group-item">
                  <h6>{`Email: ${userOrder.email}`}</h6>
                </li>
                <li className="list-group-item">
                  <h6>{`Dirección: ${order.checkoutInfo?.address}`}</h6>
                </li>
                <li className="list-group-item">
                  <h6>{`Teléfono: ${order.checkoutInfo?.phone}`}</h6>
                </li>
              </ul>
            </div>
          </div>

          <div className="container col-sm-6 card border shadow-0 mt-4">
            <div className="container card-title m-3">
              <h3>Información de la orden:</h3>
            </div>
            <div className="container card-body">
              <p>
                <strong>Productos:</strong>
              </p>
              {order.items?.map((product) => (
                <p>{`Producto: ${product.name}. Cantidad: ${product.quantity}. Precio: ${priceFormat.format(product.price)} c/u.`}</p>
              ))}

              <hr />
              <p>
                <strong>Fecha:</strong>
              </p>
              {`${order.date?.slice(0, 10)}. Hora: ${order.date?.slice(
                11,
                19
              )}`}
              <hr />
              <br />
              <h5>
                <strong>TOTAL:</strong>
              </h5>
              <h4>
                <strong>{priceFormat.format(order.total)}</strong>
              </h4>
            </div>
          </div>
          <div>
            <br />
            <br />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleOrder;
