import React, {useState} from "react";
import { Stepper, Step } from "react-form-stepper";

import tablas from "../assets/tabla.jpg";
import trucks from "../assets/trucks.jpg";
import ruedas from "../assets/ruedas.jpg";
import rodamientos from "../assets/rodamientos.jpg";
import grip from "../assets/grip.jpg";
import spacer from "../assets/spacer.jpg";
import hardware from "../assets/hardware.jpg";

const parts = [
  {
    idx: 0,
    name: "Tablas",
    img: tablas,
  },
  {
    idx: 1,
    name: "Trucks",
    img: trucks,
  },
  {
    idx: 2,
    name: "Ruedas",
    img: ruedas,
  },
  {
    idx: 3,
    name: "Rodamientos",
    img: rodamientos,
  },
  {
    idx: 4,
    name: "Grip",
    img: grip,
  },
  {
    idx: 5,
    name: "Risers",
    img: spacer,
  },
  {
    idx: 6,
    name: "Hardware",
    img: hardware,
  },
];

const BuildYourOwn = () => {

  const [build, setBuild] = useState([])
  const [positionBuild, setPositionBuild] = useState(0)

  const handleStep = (e) => {
    e.preventDefault()
    console.log(e.target.textContent)
    setPositionBuild(Number(e.target.textContent.slice(0, 1)) - 1)
  };

  return (
    <div className="container" style={{ fontFamily: "Bebas Neue" }}>
      <div className="container border shadow-0 rounded">
      <Stepper
        styleConfig={{ activeBgColor: "#0911e6", completedBgColor: "#040759" }}
        onClick={handleStep}
        activeStep={positionBuild}
        
      >
        {parts.map((parte) => (
          
          <Step label={`${parte.name}`} />
          
        ))}
      </Stepper>
      </div>
      <div className="container">
        <div className="row">
          <div className="container shadow-0 col-sm-3"></div>
          <div className="container shadow-0 col-sm-6">
            <div className="bg-image mt-5 d-flex justify-content-center">
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
          <div className="container mb-5 d-flex justify-content-center">
            <h1 className="fw-light titleNoMain">{parts[positionBuild].name}</h1>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default BuildYourOwn;
