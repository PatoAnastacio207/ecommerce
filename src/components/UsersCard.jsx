import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const UsersCard = ({user}) => {

  const handleAdmin = () => {
    axios
      .put(`/api/users/admin/${user._id}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));
      window.location.reload(false);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`/api/users/admin/${user._id}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));
      window.location.reload(false);
  }

  return (
    <div className="col">
      <div className="card hover-shadow border" style={{ fontFamily: "Bebas Neue" }}>
        
          <div className="bg-image hover-overlay ripple ">
            <img src="https://lateclapat-repos-dgf.aplinews.com/archivos/noticias/fotografias/66992_3.jpg" className="img-fluid" />
          </div>
        <div className="card-body">
          <Link className="link-dark text-decoration-none">
            <h5 class="card-title">{`${user.firstName} ${user.lastName || ""}`}</h5>
          </Link>
          <p className="card-text text-muted">
            {user.email}
          </p>
          <div className="d-flex justify-content-between">
            <Link onClick={handleAdmin}>
            <h4>{user.isAdmin ? ("Es admin") : ("No es admin")}</h4>
            </Link>

              <div class="btn-toolbar" role="toolbar">
                <div class="btn-group me-2 shadow-0" role="group">
                  <button className="btn btn-info shadow-0">
                    <i className="fas fa-edit"></i>
                  </button>
                </div>
                <div class="btn-group shadow-0" role="group">
                  <button className="btn btn-danger shadow-0" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersCard;