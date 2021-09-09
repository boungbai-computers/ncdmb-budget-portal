import React, { Component } from "react";
import styled from "styled-components";

import { FaArrowAltCircleDown } from "react-icons/fa";

const Wrapper = styled.div`
  position: absolute;
  left: 80%;
  top: 5%;
  display: flex;
  align-items: center;

  #logo {
    background: rgba(0, 0, 0, 0.24);
    font-family: Roboto !important;
    align-items: center !important;
    display: flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-weight: 900;
    border-radius: 50%;
    color: white;
    font-size: 30px;
  }

  .text {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    line-height: 15px;
    align-items: flex-end;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.74);
    font-weight: 900;
  }

  .text small {
    color: rgba(0, 0, 0, 0.34);
    font-size: 15px;
  }
`;

class AdminInfo extends Component {
  render() {
    return (
      <Wrapper>
        <div id="logo">IT</div>

        <div className="text">
          <div>
            IT DEPARTMENT <FaArrowAltCircleDown />
          </div>
          <small>Signed in</small>
        </div>
      </Wrapper>
    );
  }
}

export default AdminInfo;
