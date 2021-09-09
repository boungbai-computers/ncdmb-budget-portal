import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

import FundStaffInput from "../components/fundStaffInput";

const FundStaff = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <section id="approvalContainer">
      {showModal ? (
        <div className="approvalContent">
          <i>
            <FaRegUserCircle />
          </i>
          <div className="textGrp">
            <h2>DOMOTIMI AUSTIN</h2>
            <p>Hospitality Training</p>
          </div>

          <FundStaffInput />

          <div className="status">
            <div className="badge btn">Fund Staff</div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default FundStaff;
