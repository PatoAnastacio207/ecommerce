import React, { useState} from "react";

import { Stepper, Step } from "react-form-stepper";

import BuildList from './BuildList'

import tablas from "../assets/tabla.jpg";
import trucks from "../assets/trucks.jpg";
import ruedas from "../assets/ruedas.jpg";
import rodamientos from "../assets/rodamientos.jpg";
import grip from "../assets/grip.jpg";
import spacer from "../assets/spacer.jpg";
import hardware from "../assets/hardware.jpg";
import imagen1 from "../assets/Buildyourown.png"

const parts = [
  {
    idx: 0,
    name: "tablas",
    img: tablas,
  },
  {
    idx: 1,
    name: "trucks",
    img: trucks,
  },
  {
    idx: 2,
    name: "ruedas",
    img: ruedas,
  },
  {
    idx: 3,
    name: "rodamientos",
    img: rodamientos,
  },
  {
    idx: 4,
    name: "grip",
    img: grip,
  },
  {
    idx: 5,
    name: "risers",
    img: spacer,
  },
  {
    idx: 6,
    name: "hardware",
    img: hardware,
  },
  {
    idx: 7,
    name: "Listo",
    img: imagen1,
  },
];

const BuildYourOwn = () => {

  const [positionBuild, setPositionBuild] = useState(0)

  const handleStep = (e) => {
    e.preventDefault()
    const nextIndex = Number(e.target.textContent.slice(0, 1)) - 1

    if (nextIndex > -1) setPositionBuild(Number(e.target.textContent.slice(0, 1)) - 1)
  };

  return (
   
    <div className="container" style={{ fontFamily: "Bebas Neue" }}>
       <br/><br/><br/>
      <div className="container border shadow-0 rounded">
      <Stepper
        onClick={handleStep}
        activeStep={positionBuild}
        
      >
        {parts.map((parte) => (
      
          <Step label={`${parte.name}`} completed={true} style={positionBuild > parte.idx ? {backgroundColor: "#040759"} : positionBuild === parte.idx ? {backgroundColor: "blue"} :  {backgroundColor: "gray"}} />
          
        ))}
      </Stepper>
      </div>
      <br/>
      <div className="container">
        <div className="row">
          <div className="container shadow-0 col-sm-3"></div>
          <div className="container shadow-0 col-sm-6">
            <div className="bg-image d-flex justify-content-center">
              <img
                src={parts[positionBuild].img}
                className="img-fluid"
                style={{ maxHeight: "60%", maxWidth: "60%" }}
                alt="imagen"
              />
            </div>
          </div>
          <div className="container shadow-0 col-sm-3"></div>
        </div>
        <div className="row">
          <div className="container d-flex justify-content-center">
            <h1 className="fw-light titleNoMain">{parts[positionBuild].name}</h1>
          </div>
        </div>
      </div>
      <div className="container">
      <BuildList parts={parts} position={positionBuild} setPosition={setPositionBuild}/>
      </div>
    </div>
  );
};

export default BuildYourOwn;
