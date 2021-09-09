import React from "react";
import styled from "styled-components";
import SideBar from "../components/sideBar";

import { FaFileAlt } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  background: #e5e5e5;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
  }
`;

const Content = styled.div`
  margin: 80px 50px;
  width: 55%;

  .text {
    margin-bottom: 25px;
  }

  .text h6 {
    font-weight: 900;
    color: rgba(224, 189, 6, 0.8);
    font-size: 24px;
  }

  .text span {
    color: rgba(1, 86, 5, 0.63);
  }

  .text small {
    font-weight: 900;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.47);
  }

  #container {
    margin-left: 15px;
  }

  #content {
    background: #ffffff;
    box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    padding: 40px;
    justify-content: space-between;
    // height: 400px;
  }

  #content span {
    color: rgba(224, 189, 6, 0.8);
  }

  #claim-info {
    width: 100%;
  }

  #claim-info h3 {
    font-size: 20px;
    line-height: 23px;
    color: rgba(224, 189, 6, 0.8);
    margin-bottom: 5px;
  }

  #claim-info hr {
    border: 1px solid rgba(224, 189, 6, 0.8);
  }

  .claim-body .accomodation-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  .claim-body .accomodation-content h3 {
    color: rgba(1, 86, 5, 0.63);
  }

  .claim-body .accomodation-content small {
    color: rgba(0, 0, 0, 0.47);
  }

  .claim-body .accomodation-content p {
    font-size: 18px;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.47);
  }

  hr {
    display: inline-block;
    border: 1px solid #e5e5e5;
    width: 100%;
  }

  .below {
    justify-content: flex-end !important;
    margin: 10px 0px;
    line-height: 30px;
    flex-direction: column;
    align-items: flex-end;
    display: flex;
  }

  .below h4 {
    color: rgba(1, 86, 5, 0.63);
    font-weight: 900;
  }

  @media screen and (max-width: 768px) {
    margin: 0 !important;
    width: 100%;

    .text {
      margin: 10px 0px;
      text-align: center;
      line-height: 15px;
    }

    .text h6 {
      font-weight: 900;
      color: rgba(224, 189, 6, 0.8);
      font-size: 24px;
    }

    #container {
      margin-left: 15px;
      max-width: fit-content;
    }

    #content {
      height: fit-content !important;
    }

    #claim-info {
      text-align: center;
    }

    #claim-info h3 {
      font-size: 20px;
      color: rgba(224, 189, 6, 0.8);
    }

    #claim-info hr {
      border: 1px solid rgba(224, 189, 6, 0.8);
    }
  }
`;

const ClaimPage = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <div className="text">
          <h6>
            Claims{" "}
            <span>
              {" "}
              {`>`} View Claims {`> `}
              <small>Abuja Conference Meeting</small>
            </span>
          </h6>
        </div>

        <div id="container">
          <div id="content">
            <div id="claim-info">
              <h3>Claim Info</h3>
              <hr />
            </div>

            <div className="claim-body">
              <div className="accomodation-content">
                <div>
                  <h3>Accomodation</h3>
                  <small>Hotel Name</small>
                  <p>Crystaline Lodge & Suites</p>
                </div>

                <div>
                  <small>Number of Extra Nights</small>
                  <p>Two Nights</p>
                </div>

                <div>
                  <small>Cost per night</small>
                  <p>N10,000</p>
                </div>

                <div>
                  <small>Cost per night</small>
                  <p>20,000</p>
                </div>
              </div>

              <hr />

              <div className="accomodation-content">
                <div>
                  <h3>Transportation</h3>
                  <small>Transportation means</small>
                  <p>Air Transport</p>
                </div>

                <div>
                  <small>Airport Station</small>
                  <p>Arik Airlines</p>
                </div>

                <div>
                  <small>From - To</small>
                  <p>Abuja - Bayelsa</p>
                </div>

                <div>
                  <small>Cost</small>
                  <p>80,000</p>
                </div>
              </div>

              <hr />

              <div className="accomodation-content">
                <div>
                  <small>Day 1 - Breakfast</small>
                  <p>Bread, fried egg {`&`} coffee</p>
                </div>

                <div>
                  <small>Day 1 - Lunch</small>
                  <p>Fried rice & chicken</p>
                </div>

                <div>
                  <small>Day 1 - Dinner</small>
                  <p>Wheat and Orha Soup</p>
                </div>

                <div>
                  <small>Cost</small>
                  <p>34,500</p>
                </div>
              </div>

              <div className="accomodation-content">
                <div>
                  <small>Day 2 - Breakfast</small>
                  <p>Pap {`&`} Cookies</p>
                </div>

                <div>
                  <small>Day 2 - Lunch</small>
                  <p>Salad</p>
                </div>

                <div>
                  <small>Day 2 - Dinner</small>
                  <p>Pounded yam & Egusi</p>
                </div>

                <div>
                  <small>Cost</small>
                  <p>28,000</p>
                </div>
              </div>

              <div className="below">
                <h4>Total Cost:162,500</h4>

                <div className="bar">
                  <div
                    style={{
                      background: "rgba(224, 189, 6, 0.8)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <small
                      style={{
                        fontSize: "11px",
                        color: " rgba(0, 0, 0, 0.47)",
                        marginLeft: "5px",
                        position: "relative",
                      }}
                    >
                      View supporting attachments
                    </small>
                    <FaFileAlt />
                  </div>
                </div>
              </div>
            </div>

            <button
              style={{
                border: "4px solid rgba(1, 86, 5, 0.63)",
                boxSizing: "border-box",
                filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))",
                borderRadius: "50px",
                padding: "8px",
                margin: "20px",
                width: "100px",
                color: "rgba(1, 86, 5, 0.63)",
                fontWeight: "900",
                background: "none",
                cursor: "pointer",
              }}
            >
              Clear
            </button>

            <button
              style={{
                background: "rgba(224, 189, 6, 0.8)",
                boxshadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                boxSizing: "border-box",
                borderRadius: "50px",
                padding: "8px",
                margin: "20px",
                width: "100px",
                color: "rgba(0, 0, 0, 0.74)",
                cursor: "pointer",
                fontWeight: "900",
              }}
            >
              Decline
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default ClaimPage;
