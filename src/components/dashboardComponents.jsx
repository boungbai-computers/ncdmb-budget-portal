import React, { Component } from "react";
import CarouselGist from "./carouselGist";

import { FaCreditCard, FaUserEdit, FaRecycle, FaEye } from "react-icons/fa";

class DashboardComponents extends Component {
  render() {
    return (
      <div id="componentWrapper">
        <CarouselGist />

        <div className="cardsDiv">
          <div className="cardGroup">
            <div className="card card1">
              <div className="grouptxt">
                <h3>Budget</h3>
                <hr />
                <p>illo incidunt dignissimos tempora voluptas hic assumenda</p>
              </div>

              <i>
                <FaCreditCard style={{ color: " rgba(8, 191, 15, 0.08)" }} />
              </i>
            </div>

            <div className="card card2">
              <div className="grouptxt">
                <h3>Claims</h3>
                <hr />
                <p>illo incidunt dignissimos tempora voluptas hic assumenda</p>
              </div>

              <i>
                <FaUserEdit style={{ color: "rgba(255, 217, 16, 0.25)" }} />
              </i>
            </div>
          </div>

          <div className="cardGroup">
            <div className="card card3">
              <div className="grouptxt">
                <h3>Retire</h3>
                <hr />
                <p>illo incidunt dignissimos tempora voluptas hic assumenda</p>
              </div>

              <i>
                <FaRecycle style={{ color: "rgba(255, 217, 16, 0.25)" }} />
              </i>
            </div>

            <div className="card card4">
              <div className="grouptxt">
                <h3>Tracking</h3>
                <hr />
                <p>illo incidunt dignissimos tempora voluptas hic assumenda</p>
              </div>

              <i>
                <FaEye style={{ color: " rgba(8, 191, 15, 0.08)" }} />
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardComponents;
