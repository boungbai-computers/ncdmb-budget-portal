import React from "react";
import Form from "../common/form";

import Joi from "joi-browser";

import Head from "../components/head";

class AccomadationClaim extends Form {
  state = {
    user: {
      training: "",
      accomodation: "",
      hotelname: "",
      costpernight: "",
      numberofextranights: "",
    },
    errors: {},
  };

  user = {
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
                value={this.state.user.training}
                name="training"
                onChange={this.handleChange}
              />

              <input
                type="text"
                style={{ marginLeft: "100px" }}
                value={this.state.user.claim}
                placeholder="Accomodation"
                name="accommodation"
                onChange={this.handleChange}
              />
            </div>

            <div id="group">
              <input
                type="text"
                placeholder="Hotel Name"
                value={this.state.user.training}
                name="hotelname"
                onChange={this.handleChange}
              />

              <input
                type="text"
                style={{ marginLeft: "100px" }}
                value={this.state.user.claim}
                placeholder="Cost per night"
                name="costpernight"
                onChange={this.handleChange}
              />
            </div>

            <div id="group">
              <input
                type="text"
                placeholder="Number of extra nights"
                value={this.state.user.training}
                name="training"
                onChange={this.handleChange}
              />

              <input
                type="text"
                style={{ marginLeft: "100px" }}
                value={this.state.user.claim}
                placeholder="Number of extra nights"
                name="claim"
                onChange={this.handleChange}
              />
            </div>

            <div className="addText">
              <small>ADD ANOTHER CLAIM</small>
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AccomadationClaim;
