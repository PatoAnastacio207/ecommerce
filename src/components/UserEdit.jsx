import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useInput } from "../hooks/custom-hooks";
import axios from "axios"
import {login} from "../features/userSlice"
import {useHistory} from 'react-router-dom'


const UserEdit = () => {
  const user = useSelector(selectUser);
  const phone = useInput("phone");
  const address = useInput("address");

  const dispatch = useDispatch()
  const history = useHistory()

//   useEffect(() => {
//     axios
//     .get('/checkout/myorders')
//     .then((res)=>console.log(res)
//   }, [])

  const handleSave = (e) => {
    e.preventDefault();
    axios
      .put(`/api/users/${user._id}`, {
        checkoutInfo: { address: address.value || user?.checkoutInfo.address, phone: phone.value || user?.checkoutInfo.phone},
      })
      .then((data) => {
        dispatch(login(data.data));
        history.push("/myProfile")
      })
    }
  return (
    <div>
      <br />
      <br />
      <br />
      <h2 className="fw-light titleNoMain">My Profile</h2>
      <form
        className="container col-sm-3 shadow-2-strong rounded"
        style={{ fontFamily: "Bebas Neue" }}
        onSubmit={handleSave}
      >
        <br />
        <div className="row">
          <div className="col-sm-9">
            <label for="name">Name</label>
            <input
              type="text"
              value={user?.firstName}
              className="form-control"
              disabled
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-9">
            <label for="name">Last Name</label>
            <input
              type="text"
              value={user?.lastName}
              className="form-control"
              disabled
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-9">
            <label for="month">Phone</label>{" "}
            <input
              type="text"
              defaultValue={user?.checkoutInfo.phone}
              value={phone.value}
              className="form-control"
              onChange={phone.onChange}
              required
            
            ></input>
          </div>
        </div>

        <br />
        <div className="col-sm-9">
          <label for="cvv">Address </label> {"  "}
          <input 
            type="text"
            defaultValue={user?.checkoutInfo.address}
            value={address.value}
            className="form-control"
            onChange={address.onChange}
            required
         
          ></input>
        
        </div>
        <br />
        <input
          type="submit"
          className="btn btn-primary"
          value="Save Change"
        />

        <br />
        <br />
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

    // <div className="container">
    //     <h1>My Profile</h1>
    //     <h4>Nombre</h4>
    //     <p>{user && user.firstName}</p>
    //     <h4>Apellido</h4>
    //     <p>{user && user.lastName}</p>

    // </div>
  );
};

export default UserEdit;
