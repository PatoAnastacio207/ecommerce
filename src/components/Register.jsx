import React from "react";
import { useHistory } from "react-router-dom";
import { useInput } from "../hooks/custom-hooks";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import Notification from "../utils/Notification"
import Swal from "sweetalert2";

//import { UserContext } from "../index";

const Register = () => {
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");
  const firstName = useInput('firstName')
  const lastName = useInput('lastName')

  const handleGoogle = (e) => {
    e.preventDefault();

    axios.post("/api/auth/google").then(() => {
      Notification.successMessage("Register success")
      history.push("/login");
    });
  };

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
          return history.push("/login");
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
                  {...email}
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
              class="w-100 btn btn-google btn-danger btn-lg mb-4"
              onClick={handleGoogle}
              >
              {" "}
              <i class="fab fa-google"></i> Sign in with Google
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
