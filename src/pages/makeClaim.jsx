import React from "react";
import Joi from "joi-browser";
import styled from "styled-components";

import Form from "../common/form";
import Head from "../components/head";
import { FaPlus } from "react-icons/fa";
import Dropdown from "../common/Dropdown";

const FormWrapper = styled.form`
  div {
    display: flex;
    align-items: center;
    margin: 10px 12px !important;
  }

  input {
    outline: none;
    border-bottom: 3px solid rgba(0, 0, 0, 0.34);
    opacity: 0.6;
    width: 30%;
    background: transparent;
    padding-bottom: 10px;
  }

  input::placeholder {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.24);
  }

  .mkClaimBtn {
    border: 4px solid rgba(1, 86, 5, 0.63);
    box-sizing: border-box;
    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25)) !important;
    border-radius: 50px;
    font-weight: 900;
    background: transparent;
    width: 118px;
    height: 41px;
    color: rgba(1, 86, 5, 0.63);
    cursor: pointer;
    transition: ease-in-out 0.3s all;
  }

  .mkClaimBtn:hover {
    background: rgb(1, 86, 5);
    color: white;
  }

  #addDiv {
    margin: 30px 12px !important;
    font-size: 12px;
    cursor: pointer;

    width: fit-content;
  }

  #addDiv .icon {
    margin-right: 5px;
    color: rgba(0, 0, 0, 0.74);
  }

  #addDiv p {
    color: rgba(0, 0, 0, 0.74);
    font-weight: 900;
  }

  @media screen and (max-width: 768px) {
    div {
      flex-direction: column;
    }

    input {
      width: 100% !important;
      margin-left: 0px !important;
    }

    .mkClaimBtn {
      border: 4px solid rgba(1, 86, 5, 0.63);
      box-sizing: border-box;
      filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25)) !important;
      border-radius: 50px;
      font-weight: 900;
      background: transparent;
      width: 118px;
      height: 41px;
      color: rgba(1, 86, 5, 0.63);
      cursor: pointer;
      transition: ease-in-out 0.3s all;
    }

    .mkClaimBtn:hover {
      background: rgb(1, 86, 5);
      color: white;
    }

    #addDiv {
      margin: 30px 12px !important;
      font-size: 12px;
      cursor: pointer;

      width: fit-content;
    }

    #addDiv .icon {
      margin-right: 5px;
      color: rgba(0, 0, 0, 0.74);
    }

    #addDiv p {
      color: rgba(0, 0, 0, 0.74);
      font-weight: 900;
    }
  }
`;

class MakeClaim extends Form {
  state = {
    claim: {
      training: "",
      accomodation: "",
      hotelname: "",
    },
    errors: {},
  };

  schema = {
    training: Joi.string().required().label("Training"),
    claim: Joi.string().required().label("Claim"),
  };

  render() {
    return (
      <div className="staff-container">
        <Head />
        <div className="makeClaimDiv">
          <div className="claimText">
            <h4>Make Claim</h4>
            <small>Kindly fill the form the make a claim</small>
          </div>

          <FormWrapper className="form">
            <div>
              <input
                type="text"
                placeholder="Abuja Conference Training"
                value={this.state.claim.training}
                name="training"
                onChange={this.handleChange}
              />

              <input
                type="text"
                style={{ marginLeft: "100px" }}
                value={this.state.claim.accomodation}
                placeholder="Accomodation"
                name="accomodation"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Hotel Name"
                value={this.state.claim.training}
                name="training"
                onChange={this.handleChange}
              />

              <input
                type="text"
                style={{ marginLeft: "100px" }}
                value={this.state.claim.claim}
                placeholder="Cost per night"
                name="claim"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Number of extra nights"
                value={this.state.claim.training}
                name="training"
                onChange={this.handleChange}
              />

              <input
                type="text"
                style={{ marginLeft: "100px" }}
                value={this.state.claim.claim}
                placeholder="Number of extra nights"
                name="claim"
                onChange={this.handleChange}
              />
            </div>

            <div id="addDiv">
              <FaPlus className="icon" />
              <p>ADD ANOTHER CLAIM</p>
            </div>

            <button className="mkClaimBtn">Submit</button>
          </FormWrapper>
        </div>
      </div>
    );
  }
}

export default MakeClaim;
