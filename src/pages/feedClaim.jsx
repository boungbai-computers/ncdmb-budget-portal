import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

import Head from "../components/head";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const Button = styled.button`
  width: 120px;
  background: none;
  padding: 10px;
  border: 4px solid rgba(1, 86, 5, 0.63);
  box-sizing: border-box;
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25));
  color: rgb(1, 86, 5);
  font-weight: 900;
  border-radius: 50px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

class FeedClaim extends Form {
  state = {
    staff: {
      training: "",
      accomodation: "",
      hotelname: "",
      costpernight: "",
      numberofextranights: "",
    },
    errors: {},
  };

  staff = {
    training: Joi.string().required().label("Training"),
    accomodation: Joi.string().required().label("Training"),
    hotelname: Joi.string().required().label("Training"),
    costpernight: Joi.string().required().label("Training"),
    numberofextranights: Joi.string().required().label("Training"),
  };

  render() {
    return (
      <div className="wrapper">
        <Head />

        <div className="accomodationClaim">
          <div className="claimText">
            <h4>Make Claim</h4>
            <small>Kindly fil the form the make a claim</small>
          </div>

          <form className="form">
            <div id="group">
              <input
                type="text"
                placeholder="Abuja Conference Training"
                value={this.state.staff.training}
                name="training"
                onChange={this.handleChange}
              />

              <input
                type="text"
                style={{ marginLeft: "100px" }}
                value={this.state.staff.claim}
                className="input2"
                placeholder="Accomodation"
                name="accommodation"
                onChange={this.handleChange}
              />
            </div>

            <div id="group">
              <input
                type="text"
                placeholder="Hotel Name"
                value={this.state.staff.training}
                name="hotelname"
                onChange={this.handleChange}
              />

              <input
                type="text"
                style={{ marginLeft: "100px" }}
                value={this.state.staff.claim}
                className="input2"
                placeholder="Cost per night"
                name="costpernight"
                onChange={this.handleChange}
              />
            </div>

            <div id="group">
              <input
                type="text"
                placeholder="Number of extra nights"
                value={this.state.staff.training}
                name="training"
                onChange={this.handleChange}
              />

              <input
                type="text"
                style={{ marginLeft: "100px" }}
                value={this.state.staff.claim}
                className="input2"
                placeholder="Number of extra nights"
                name="claim"
                onChange={this.handleChange}
              />
            </div>

            <div id="group">
              <input
                type="text"
                placeholder="Abuja conference training"
                value={this.state.staff.training}
                name="training"
                onChange={this.handleChange}
              />

              <input
                type="text"
                style={{ marginLeft: "100px" }}
                value={this.state.staff.claim}
                className="input2"
                placeholder="Feeding"
                name="claim"
                onChange={this.handleChange}
              />
            </div>

            <div id="group">
              <input
                type="text"
                placeholder="Number of extra days"
                value={this.state.staff.training}
                name="training"
                onChange={this.handleChange}
              />

              <input
                type="text"
                style={{ marginLeft: "100px" }}
                value={this.state.staff.claim}
                className="input2"
                placeholder="Number of meals per day"
                name="claim"
                onChange={this.handleChange}
              />
            </div>

            <div className="addText">
              <FaPlus
                style={{
                  color: "rgba(0,0,0,0.74)",
                  marginRight: "5px",
                }}
              />
              <small>ADD ANOTHER CLAIM</small>
            </div>

            <Button>Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default FeedClaim;
