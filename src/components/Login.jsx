import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useInput } from "../hooks/custom-hooks";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { login, selectUser } from '../features/userSlice'
import Swal from 'sweetalert2'
//import { UserContext } from "../index";


const Login = () => {

  const dispatch = useDispatch();
  //const { setUser } = useContext(UserContext);
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");

  const handleGoogle = (e) => {
    e.preventDefault();
    console.log("login attempt...")
    axios
      .post("/api/auth/google")

      .then(res => {
        dispatch(login(res.data))
        Swal.fire({
          icon: 'success',
          title: 'Login success',
          showConfirmButton: false,
          timer: 1500
        })
        history.push("/");
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login attempt...")
    axios.post("/api/auth/login", {
        email: email.value,
        password: password.value,
      })
      .then(res => {
        dispatch(login(res.data))
        Swal.fire({
          icon: 'success',
          title: 'Login success',
          showConfirmButton: false,
          timer: 1500
        })
        history.push("/");
      })
     .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          showConfirmButton: false,
          text: "Credenciales incorrectas!",
          timer: 1500
        })
        console.log(err)
      })
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
              <span><br /><br /><br /><br /><br /></span>
              <h1 className=" mb-3 fw-light">Log in</h1>
              <span><br /></span>

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
              <span><br /></span>
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
                  Don't have an account? <Link to='/register'>Register.</Link>
                </div>
              </div>

              <span><br /></span>
              <button className="w-100 btn btn-lg btn-info" type="submit" style={{fontSize: 'large'}}>
                Log in
              </button>
            </form>
            <br />
            {/* <button class="w-100 btn btn-google btn-danger btn-lg mb-4" onClick={handleGoogle}> <i class="fab fa-google"></i>  Sign in with Google</button> */}
            <span><br /></span>
          </main>
        </div>
        <div className="col-sm">
          <span></span>
        </div>
      </div>
      <br /><br /><br /><br />
      <br /><br /><br /><br />
    </div>
  );
};

export default Login;
