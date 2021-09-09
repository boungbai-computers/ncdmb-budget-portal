import React from "react";
import { Link, NavLink } from "react-router-dom";
import images from "../assets/data/images";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={images.logo} alt="Logo" />
        <h3>
          NCDMB <br /> BUDGET PORTAL
        </h3>
      </div>

      <div className="menu-bar">
        <div className="nav-group">
          <Link className="link" to="/">
            Home
          </Link>
        </div>

        <div className="nav-group">
          <Link className="link" to="/budget">
            Budget
          </Link>

          <div className="sub-group">
            <NavLink className="nav-link" to="/budget/new">
              New Budget
            </NavLink>
            <NavLink className="nav-link" to="/budget/current">
              Current Budget
            </NavLink>
            <NavLink className="nav-link" to="/budget/previous">
              Previous Budget
            </NavLink>
            <NavLink className="nav-link" to="/budget/borrow-fujd">
              Borrow Fund
            </NavLink>
          </div>
        </div>

        <div className="nav-group">
          <Link className="link" to="/claims">
            Claims
          </Link>

          <div className="sub-group">
            <NavLink className="nav-link" to="/claims/view-claims">
              View Claims
            </NavLink>
          </div>
        </div>

        <div className="nav-group">
          <Link className="link" to="/training">
            Training
          </Link>

          <div className="sub-group">
            <NavLink className="nav-link" to="/training/nominate-staff">
              Nominate Staff
            </NavLink>

            <NavLink className="nav-link" to="/training/nominated-staff">
              Nominated Staff
            </NavLink>

            <NavLink className="nav-link" to="/training/funded-staff">
              Funded Staff
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
