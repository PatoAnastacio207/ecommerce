import React from "react"
import MyOrders from "./MyOrders";

const Review = ()=>{
    return (
        <div>
          <br />
          <br />
          <br />
          <h2 className="fw-light titleNoMain">My Review</h2>
          <form
            className="container col-sm-3 shadow-2-strong rounded"
            style={{ fontFamily: "Bebas Neue" }}
          
          >
            <br />
            <div className="row">
              <div className="col-sm-12">
                <label for="name">Producto</label>
                <input
                  type="text"

                  className="form-control"
                  disabled
                ></input>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-12">
                <label for="name">Last Name</label>
                <input
                  type="text"
                  
                  className="form-control"
                  disabled
                ></input>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-12">
                <label for="month">Phone</label>{" "}
                <input
                  type="text"
                
                  className="form-control"
                 
                  required
                ></input>
              </div>
            </div>
    
            <br />
            <div className="col-sm-12">
              <label for="cvv">Address </label> {"  "}
              <input
                type="text"
              
                className="form-control"
               
                required
              ></input>
            </div>
            <br />
            <div className="col-sm-12">
              <label for="cvv">Email </label> {"  "}
              <input
                type="text"
             
                className="form-control"
                required
                disabled
              ></input>
            </div>
            <br/>
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <input
                  type="submit"
                  className="btn btn-danger"
                  value="Save Change"
                />
    
                <br />
                <br />
              </div>
              <div className="col-sm-4"></div>
            </div>
          </form>
  
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
    
      );
}
export default Review