import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useInput } from "../hooks/custom-hooks";
import axios from "axios";
import Notification from "../utils/Notification"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Register = () => {
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");
  const firstName = useInput('firstName')
  const lastName = useInput('lastName')

  let query = useQuery()
  const redirect = query.get("buy") === "true" ? true : false 
  const url = redirect ? "/login?buy=true" : "/login"

 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/register", {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      })
      .then(({data}) => {
        if (data._id) {
          Notification.successMessage("Register success")
          return history.push(url);
        }
        Notification.errorMessage("Oops...")
      })
      .catch((err) => {
        Notification.errorMessage("Oops...")
      });
  };

  return (
    <div className="container-sm" style={{fontFamily:"Bebas Neue"}}>
      <div className="row">
        <div className="col-sm">
          <span></span>
        </div>
        <div className="col-sm-3">
          <main className="form-signin text-center">
            <form onSubmit={handleSubmit}>
              <span>
                <br />
                <br />
                <br />
              </span>
              <h1 className=" mb-3 fw-light">Register</h1>
              <span>
                <br />
              </span>
              <div className="form-floating">
                <input
                  style={{fontFamily: "roboto condensed"}}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="first name"
                  required
                  pattern="[a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,}"
                  {...firstName}
                />
                <label for="floatingInput">Nombre</label>
              </div>
              <span>
                <br />
              </span>
              <div className="form-floating">
                <input
                  style={{fontFamily: "roboto condensed"}}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="last name"
                  required
                  pattern="[a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,}"
                  {...lastName}
                />
                <label for="floatingInput">Apellido</label>
              </div>
              <span>
                <br />
              </span>
              <div className="form-floating">
                <input
                  style={{fontFamily: "roboto condensed"}}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                  {...email}
                  pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <span>
                <br />
              </span>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                  {...password}
                />
                <label for="floatingPassword">Password</label>
                <div id="emailHelp" className="form-text">
                  {" "}
                </div>
              </div>

              <span>
                <br />
              </span>
              <button className="w-100 btn btn-lg btn-info" type="submit" style={{fontSize: 'large'}}>
                Register
              </button>
            </form>
            <br />
            {/* <button
              className="w-100 btn btn-google btn-danger btn-lg mb-4"
              onClick={handleGoogle}
              >
              {" "}
              <i className="fab fa-google"></i> Sign in with Google
            </button> */}
            <span>
              <br />
            </span>
          </main>
        </div>
        <div className="col-sm">
          <span></span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br style={{marginBottom: "9px"}}/>
    </div>
  );
};

export default Register;
