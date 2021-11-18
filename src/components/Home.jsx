import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import imagen1 from "../assets/Buildyourown.png";
import imagen3 from "../assets/Photo1.png";
import imagen4 from "../assets/Photo4.png";
import imagen5 from "../assets/SkaterCaido.png";

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
              <Link to="/buildyourown"><button type="button" className="mainButton" style={{ width: "80%",height:"80%" ,opacity:"0.9"}} >Build your own sk8 <br/>
              </button>
              </Link>
              <br/>
              </div>
      <br />
      <br />
      <br />
      <div className="container" id="our-story">
        <br />
        <h1 className="titleBottoms">Our story</h1>
      </div>
      <div>
        <p className="textHome">
          We were born to be cool, but we decided to be cool dummies.
        </p>
        <p className="textHome">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec risus tortor<br /> convallis ac dictum vitae auctor quis quam. 
        </p>
        <div className="d-flex justify-content-around">
          <img className="align-self-center" src={imagen4} alt="" style={{maxWidth: "40%"}}/>
          <img className="align-self-center" src={imagen5} alt="" style={{maxWidth: "35%"}}/>
        </div>
      </div>
    </div>
  );
};
export default Home;
