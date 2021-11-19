import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <main
      className="col-sm-2 flex-shrink-0 p-3 bg-white card"
      style={{
        width: "280px",
        height: "100%",
        fontFamily: "Bebas Neue",
        minHeight: "720px",
      }}
    >
      <div className="card-tittle">
        {" "}
        <h4>Panel Admin</h4>
      </div>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Productos
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-mdb-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link
                    to="/admin/productadd"
                    className="link-dark text-decoration-none"
                  >
                    Agregar
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="/admin/products"
                    className="link-dark text-decoration-none"
                  >
                    Editar/Eliminar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Usuarios
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-mdb-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link
                    to="/admin/useradd"
                    className="link-dark text-decoration-none"
                  >
                    Agregar
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="/admin/users"
                    className="link-dark text-decoration-none"
                  >
                    Editar/Eliminar
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
          
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTres">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapseTres"
              aria-expanded="false"
              aria-controls="flush-collapseTres"
            >
              Órdenes
            </button>
          </h2>
          <div
            id="flush-collapseTres"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTres"
            data-mdb-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link
                    to="/admin/orders/pending"
                    className="link-dark text-decoration-none"
                  >
                    Pendientes
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="/admin/orders/old"
                    className="link-dark text-decoration-none"
                  >
                    Pasadas
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default AdminSidebar;
