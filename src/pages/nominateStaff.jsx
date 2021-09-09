import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

import Joi from "joi-browser";
import SideBar from "../components/sideBar";
import { Container, InputGroup, Content } from "../styles/nominate_staff";
import Dropdown from "../common/Dropdown";

class NominateStaff extends Component {
  state = {
    staff: {
      staffDepartment: "",
      nameOfStaff: "",
      originatingDepartment: "",
      trainingProgram: "",
      trainingCommencementDate: "",
      trainingExpirationDate: "",
      trainingDestination: "",
      trainingCost: "",
      placeToLodge: "",
      periodOfLodge: "",
      trainingVenue: "",
      amount: "",
    },
    isActive: false,
  };

  schema = {
    staffDepartment: Joi.string().required().label("Staff Department"),
    nameOfStaff: Joi.string().required().label("Name of Staff"),
    originatingDepartment: Joi.string()
      .required()
      .label("Originating Department"),
    trainingProgram: Joi.string().required().label("Training Programme"),
    trainingCommencementDate: Joi.string()
      .required()
      .label("Training commencement date"),
    trainingExpirationDate: Joi.string()
      .required()
      .label("Training expiration date"),
    trainingDestination: Joi.string().required().label("Training destination"),
    trainingCost: Joi.string().required().label("Training Cost"),
    placeToLodge: Joi.string().required().label("Place to Lodge"),
    periodOfLodge: Joi.string().required().label("Period of Lodge"),
    trainingVenue: Joi.string().required().label("Training Venue"),
    amount: Joi.string().required().label("Amount"),
  };

  validate = () => {
    const result = Joi.validate(this.state.staff, this.schema, {
      abortEarly: false,
    });

    if (!result.error) return null;
    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const staff = { ...this.state.staff };

    staff[input.name] = input.value;
    this.setState({ staff, errors });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { staff } = this.state;

    return (
      <Container>
        <SideBar />

        <Content>
          <div className="nominate-staff">
            <h3>
              Training
              <i style={{ color: "black", fontStyle: "normal" }}>{">"}</i>{" "}
              <span>Nominate Staff</span>
            </h3>

            <small>Kindly fill the form to nominate a staff.</small>

            <form onSubmit={handleSubmit}>
              <div style={{ marginLeft: "15px", marginTop: "15px" }}>
                <InputGroup>
                  <Dropdown
                    value={staff.staffDepartment}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    placeholder="STAFF DEPARTMENT"
                    name="staffDepartment"
                    value={staff.staffDepartment}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    placeholder="NAME OF STAFF"
                    name="nameofstaff"
                    value={staff.nameOfStaff}
                    onChange={handleChange}
                  />
                </InputGroup>

                <InputGroup>
                  <input
                    type="text"
                    placeholder="ORIGINATING DEPARTMENT"
                    name="originatingDepartment"
                    value={staff.originatingDepartment}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="TRAINING PROGRAME"
                    name="trainingProgram"
                    value={staff.trainingProgram}
                    onChange={handleChange}
                  />
                </InputGroup>

                <InputGroup>
                  <input
                    type="text"
                    placeholder="TRAINING COMMENCEMENT DATE"
                    name="trainingCommencementDate"
                    value={staff.trainingCommencementDate}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    placeholder="TRAINING EXPIRATION DATE"
                    name="trainingExpirationDate"
                    value={staff.trainingExpirationDate}
                    onChange={handleChange}
                  />
                </InputGroup>

                <InputGroup>
                  <input
                    type="text"
                    placeholder="TRAINING DESTINATION"
                    name="trainingDestinate"
                    value={staff.trainingDestination}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    placeholder="TRAINING COST"
                    name="trainingCost"
                    value={staff.trainingCost}
                    onChange={handleChange}
                  />
                </InputGroup>

                <InputGroup>
                  <input
                    type="text"
                    placeholder="PLACE TO LODGE"
                    name="placeToLodge"
                    value={staff.periodOfLodge}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    placeholder="PERIOD OF LODGE"
                    name="periodOfLodge"
                    value={staff.periodOfLodge}
                    onChange={handleChange}
                  />
                </InputGroup>

                <InputGroup>
                  <input
                    type="text"
                    placeholder="TRAINING VENUE"
                    name="trainingVenue"
                    value={staff.trainingVenue}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    placeholder="AMOUNT"
                    name="amount"
                    value={staff.amount}
                    onChange={handleChange}
                  />
                </InputGroup>

                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.74)",
                    fontSize: "15px",
                    display: "flex",
                    fontWeight: "900",
                    marginTop: "15px",
                    cursor: "pointer",
                  }}
                >
                  <FaPlus style={{ marginRight: "5px" }} />
                  ATTACH FILES
                </p>
              </div>

              <button id="btn">Submit</button>
            </form>
          </div>
        </Content>
      </Container>
    );
  }
}

export default NominateStaff;
