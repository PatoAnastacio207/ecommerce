import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import photo1 from "../assets/Buildyourown.png"
import photo2 from "../assets/caballoGrinder.png"
import photo3 from "../assets/imagen1.png"
import photo4 from "../assets/imagen5.png"
import photo5 from "../assets/Photo4.png"
import photo6 from "../assets/SkaterCaido.png"

const UsersCard = ({user}) => {
  const imgs = [photo1, photo2, photo3, photo4, photo5, photo6]
  const [img, setImg] = useState("data:image/png;base64,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")

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

  useEffect(() => {
    let total = 0
    for (let leter of user._id) total += leter.charCodeAt()
    setImg(imgs[total % 6])
  }, [])

  return (
    <div className="col">
      <div className="card hover-shadow border" style={{ fontFamily: "Bebas Neue" }}>
        
          <div className="bg-image hover-overlay ripple ">
            <img src={img} className="img-fluid" alt="una imagen"/>
          </div>
        <div className="card-body">
          <Link className="link-dark text-decoration-none">
            <h5 className="card-title">{`${user.firstName} ${user.lastName || ""}`}</h5>
          </Link>
          <p className="card-text text-muted">
            {user.email}
          </p>
          <div className="d-flex justify-content-between">
            <Link onClick={handleAdmin}>
            <h4>{user.isAdmin ? ("Es admin") : ("No es admin")}</h4>
            </Link>

              <div className="btn-toolbar" role="toolbar">
                <div className="btn-group me-2 shadow-0" role="group">
                  <button className="btn btn-info shadow-0">
                    <i className="fas fa-edit"></i>
                  </button>
                </div>
                <div className="btn-group shadow-0" role="group">
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