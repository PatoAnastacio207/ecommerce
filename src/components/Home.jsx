import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import imagen1 from "../assets/Buildyourown.png";
import imagen3 from "../assets/Photo3.png";
import imagen4 from "../assets/Photo4.png";

const Home = () => {
  const user = useSelector(selectUser);

  
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-mdb-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={imagen3} class="d-block w-100" alt="..." />
        
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/>
      <div class="d-flex justify-content-center align-items-center h-100">
              <img src={imagen1} alt="" style={{ width: "30%",height:"40%"}}/>
              <Link to="/buildyourown"><button type="button" class="mainButton" style={{ width: "80%",height:"80%" ,opacity:"0.9"}} >Build your own sk8 <br/>
              </button>
              </Link>
              <br/>
              </div>
      <br />
      <br />
      <br />
      <h1 className="titleBottoms">Our story</h1>
      <div>
        <p className="textHome">
          We born to be cool, but we decided to be cool dummies.
        </p>
        <img className="align-self-center" src={imagen4} alt="" />
      </div>
      
    </div>
  );
};
export default Home;
