import React from "react";
import axios from "axios";
import { useInput } from "../hooks/custom-hooks";
import AdminSidebar from "./AdminSidebar";

const AdminUsers = () => {
  const email = useInput("email");
  const password = useInput("password");
  const firstName = useInput("firstName");
  const lastName = useInput("lasttName");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/register", {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  return (
    <div className="row">
      <div className="col-sm-2">
        <AdminSidebar />
      </div>
      <div className="col-sm-1">
        <span></span>
      </div>
      <div className="container col-sm-7">
        <br />
        <h1>AGREGAR USUARIO</h1>
        <br />
        <div className="card container border border-dark shadow-0">
          <br />
          <div className="card-body container">
            <form onSubmit={handleSubmit}>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Primer nombre
                </span>
                <input type="text" class="form-control" {...firstName} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Apellido
                </span>
                <input type="text" class="form-control" {...lastName} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Email
                </span>
                <input type="email" class="form-control" {...email} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text col-sm-2" id="basic-addon1">
                  Password
                </span>
                <input type="text" class="form-control" {...password} />
              </div>
              <span>
                <br />
              </span>
              <button className="w-200 btn btn-lg btn-danger shadow-0" type="submit">
                <strong>Enviar</strong>
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
      <div className="container col-sm-2">
        <span></span>
      </div>
    </div>
  );
};

export default AdminUsers;
