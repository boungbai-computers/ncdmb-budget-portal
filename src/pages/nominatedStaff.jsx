import React from "react";
import { Link } from "react-router-dom";

import SideBar from "../components/sideBar";

const NominatedStaff = () => {
  return (
    <section className="new-budget-section">
      <SideBar />

      <div className="new-budget-content toTop">
        <h3>
          Budget <i style={{ color: "black", fontStyle: "normal" }}>{">"}</i>{" "}
          <span>View the list of nominated staff</span>
        </h3>

        <small>List of current budgets</small>

        <div className="loanContainer">
          <div className="loanDetails">
            <h4>
              Loan Budget <span>- Loan Budget for Youths</span>
            </h4>

            <Link to="">View More</Link>
          </div>

          <div className="loanDetails">
            <h4>
              Loan Budget <span>- Loan Budget for Youths</span>
            </h4>

            <Link to="">View More</Link>
          </div>

          <div className="loanDetails">
            <h4>
              Loan Budget <span>- Loan Budget for Youths</span>
            </h4>

            <Link to="">View More</Link>
          </div>

          <div className="loanDetails">
            <h4>
              Loan Budget <span>- Loan Budget for Women</span>
            </h4>

            <Link to="">View More</Link>
          </div>

          <div className="loanDetails">
            <h4>
              Loan Budget <span>- Loan Budget for Youths</span>
            </h4>

            <Link to="">View More</Link>
          </div>

          <div className="loanDetails">
            <h4>
              Loan Budget <span>- Loan Budget for Youths</span>
            </h4>

            <Link to="">View More</Link>
          </div>

          <div className="loanDetails">
            <h4>
              Loan Budget <span>- Loan Budget for Men</span>
            </h4>

            <Link to="">View More</Link>
          </div>

          <div className="loanDetails">
            <h4>
              Loan Budget <span>- Loan Budget for Youths</span>
            </h4>

            <Link to="">View More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NominatedStaff;
