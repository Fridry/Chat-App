import React from "react";

import closeIcon from "../../Icon/closeIcon.png";
import onlineIcon from "../../Icon/onlineIcon.png";

import "./InfoBar.css";

const InforBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="Icon Online" className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="Icon Close" />
        </a>
      </div>
    </div>
  );
};

export default InforBar;
