import React from "react"
import imagen from "../assets/SkaterCaido.png"

const NotFound =()=>{

    return(
        <div className="container">
            <br/><br/><br/>
          <div className="row d-flex justify-content-center">
            <h1
              className="d-flex justify-content-center"
              style={{ fontFamily: "Bebas Neue" }}
            >
              Hey Dummie! No hay nada por aqui
            </h1>
            <img src={imagen} style={{ maxWidth: "40%" }}></img>
          </div>
          <br />
        
        </div>
    )
}
export default NotFound