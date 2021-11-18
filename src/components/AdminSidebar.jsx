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

      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
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
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-mdb-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <Link
                    to="/admin/productadd"
                    class="link-dark text-decoration-none"
                  >
                    Agregar
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link
                    to="/admin/products"
                    class="link-dark text-decoration-none"
                  >
                    Editar/Eliminar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
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
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-mdb-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <Link
                    to="/admin/useradd"
                    class="link-dark text-decoration-none"
                  >
                    Agregar
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link
                    to="/admin/users"
                    class="link-dark text-decoration-none"
                  >
                    Editar/Eliminar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <Link to="/admin/orders" className="link-dark text-decoration-none">
          <div className="container-fluid">
              <h6>Órdenes</h6>
          </div>
          </Link>  
        </div>
      </div>
    </main>
  );
};

export default AdminSidebar;
