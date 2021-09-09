import React from "react";
import styled from "styled-components";
import SideBar from "../components/sideBar";

import { FaCheckCircle } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  background: #e5e5e5;
  width: 100%;
  height: 100vh;
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
    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.05));
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }

  #content h6 {
    font-size: 18px;
    color: rgba(1, 86, 5, 0.63);
    font-weight: 900;
    margin-left: 20px;
  }

  #content span {
    color: rgba(224, 189, 6, 0.8);
  }

  #content i {
    margin-right: 20px;
    color: rgba(224, 180, 6, 0.8);
    font-weight: 900;
  }
`;

const FundedStaff = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <div className="text">
          <h6>
            Training <span> {`>`} Funded Staff</span>
          </h6>
          <small>List of funded staff for training</small>
        </div>

        <div id="container">
          <div id="content">
            <h6>
              Domotimi Austin <span> - Hospitality Training</span>
            </h6>
            <i>
              <FaCheckCircle />
            </i>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default FundedStaff;
