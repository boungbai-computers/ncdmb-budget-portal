import React, { Component } from "react";
import { Link } from "react-router-dom";

import images from "../assets/data/images";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div id="content">
          <div className="top-content">
            <img src={images.logo} alt="ImgLogo" />
            <h2>NCDMB BUDGET PORTAL</h2>
          </div>

          <div className="middle-content">
            <div className="imgDiv">
              <img src={images.pic} alt="MiddleImg" />
            </div>

            <section>
              <div className="middle-text">
                <h1>An Express</h1>
                <h3>Budget Portal</h3>
              </div>

              <div className="btnDiv">
                <Link to="/login" className="btn loginBtn">
                  Login
                </Link>

                <Link to="/sign-up" className="btn signupBtn">
                  SignUp
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
