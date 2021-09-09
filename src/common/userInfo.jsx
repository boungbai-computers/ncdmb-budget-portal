import React, { Component } from "react";
import styled from "styled-components";

import { FaArrowAltCircleDown } from "react-icons/fa";

const Wrapper = styled.div`
  position: absolute;
  left: 80%;
  top: 7%;
  display: flex;
  align-items: center;

  #logo {
    background: #ffffff;
    font-family: Roboto !important;
    align-items: center !important;
    display: flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-weight: 900;
    border-radius: 50%;
    color: rgba(1, 86, 5, 0.85);
    font-size: 30px;
  }

  .text {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    line-height: 15px;
    align-items: flex-end;
    font-size: 20px;
    color: white;
    font-weight: 900;
  }

  .text small {
    color: #e5e5e5;
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    position: initial;
    display: flex;
    align-items: center;
  }
`;

class UserInfo extends Component {
  render() {
    return (
      <Wrapper>
        <div id="logo">FA</div>

        <div className="text">
          <div>
            Frank Amadi <FaArrowAltCircleDown style={{ color: "#C2C2C2" }} />
          </div>
          <small>Signed in</small>
        </div>
      </Wrapper>
    );
  }
}

export default UserInfo;
