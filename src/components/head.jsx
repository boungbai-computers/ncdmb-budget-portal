import React from "react";

import images from "../assets/data/images";
import UserInfo from "../common/userInfo";

const Head = () => (
  <div className="heading">
    <div className="container1">
      <img src={images.logo} alt="Logo" />
      <h4>NCDMB BUDGET PORTAL</h4>
    </div>

    <div className="container2">
      <UserInfo />
    </div>
  </div>
);
export default Head;
