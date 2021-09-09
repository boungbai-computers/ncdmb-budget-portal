import React from "react";
import { Link } from "react-router-dom";

import Head from "../components/head";

const TrackClaim = () => {
  return (
    <div className="trackClaim">
      <Head />
      <div id="claimContainer">
        <h4>Track Claim</h4>

        <div className="contentWrapper">
          <div id="content">
            <h5>Abuja Conference Training</h5>
            <Link to="#">View Status</Link>
          </div>

          <div id="content">
            <h5>Departmental Holiday Trip</h5>
            <Link to="#">View Status</Link>
          </div>
          <div id="content">
            <h5>Abuja Conference Training</h5>
            <Link to="#">View Status</Link>
          </div>

          <div id="content">
            <h5>Departmental Holiday Trips</h5>
            <Link to="#">View Status</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackClaim;
