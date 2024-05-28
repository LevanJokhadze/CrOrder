import React, { useState } from "react";
import PropTypes from "prop-types";
import StepSideBar from "../StepSideBar";
import Tent from "./Tent";
import img from "images/cargo-trailer.png";
import FlatBed from "./Flat";
import "./steptwo.scss";
import Reefer from "./Reefer";


const StepTwo = ({ onPrevious }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  let content;
  switch (selectedItem) {
    case "Tent":
      content = <Tent />;
      break;
    case "Flat Bed":
      content = <FlatBed />;
      break;
    case "Reefer":
      content = <Reefer />;
      break;
    default:
      content = null;
  }

  return (
    <div>
      <div className="d-flex flex-row justify-items-center">
        <StepSideBar currentStep={2} />
        <div className="outer">
          <div className="title item">
            <h1>Specify your cargo</h1>
          </div>
          <p className="label">Transport type *</p>
          <div className="imgs item">
            <div
              className={`img-div ${selectedItem === "Tent" ? "active" : ""}`}
              onClick={() => handleSelect("Tent")}
            >
              <img src={img} alt="Tent" />
              <p>Tent</p>
            </div>
            <div
              className={`img-div ${
                selectedItem === "Flat Bed" ? "active" : ""
              }`}
              onClick={() => handleSelect("Flat Bed")}
            >
              <img src={img} alt="Flat Bed" />
              <p>Flat Bed</p>
            </div>
            <div
              className={`img-div ${selectedItem === "Reefer" ? "active" : ""}`}
              onClick={() => handleSelect("Reefer")}
            >
              <img src={img} alt="Reefer" />
              <p>Reefer</p>
            </div>
          </div>
          <div className="content item">{content}</div>
        </div>
      </div>
    </div>
  );
};

StepTwo.propTypes = {
  onPrevious: PropTypes.func.isRequired,
};

export default StepTwo;
