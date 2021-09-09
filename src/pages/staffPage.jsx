import React from "react";
import Head from "../components/head";

import { FaEye, FaUserEdit } from "react-icons/fa";

const StaffPage = () => {
  return (
    <div className="staff-container">
      <Head />

      <div className="middleContent">
        <div className="contentDiv">
          <i style={{ color: "rgba(1, 86, 5, 0.63)" }}>
            <FaUserEdit />
          </i>
          <button className="makeClaim-btn" id="staffBtn">
            Make Claim
          </button>
        </div>

        <div className="contentDiv">
          <i style={{ color: "rgba(224, 189, 6, 0.8)" }}>
            <FaEye />
          </i>

          <button className="trackClaim-btn" id="staffBtn">
            Track Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
