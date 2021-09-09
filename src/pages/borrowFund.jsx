import React, { Component } from "react";
import styled from "styled-components";
import SideBar from "../components/sideBar";

import Joi from "joi-browser";
import { borrowRequest } from "../services/borrowService";

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
    font-size: 16px;
    line-height: 23px;
  }

  button {
    cursor: pointer;
    transition: ease-in-out 0.3s all;
    font-weight: 900;
    font-size: 15px;
    width: 100px;
    text-align: center;
    margin-top: 30px;
    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25)) !important;
  }

  button:hover {
    background: rgb(1, 86, 5);
    color: white;
  }
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-bottom: 10px;

  input {
    outline: none;
    border-bottom: 3px solid rgba(0, 0, 0, 0.34);
    opacity: 0.6;
    width: 48%;
    margin-bottom: 10px;
    background: transparent;
    padding-bottom: 10px;
  }

  input::placeholder {
    font-weight: bold;
  }
`;

const Btn = styled.button`
  border: 4px solid rgb(1, 86, 5);
  background: none;
  padding: 8px;
  border-radius: 50px;
  width: 110px !important;
  color: rgb(1, 86, 5);
`;

class BorrowFund extends Component {
  state = {
    staff: {
      departmentid: "",
      date: "",
      amountneeded: "",
      description: "",
    },
    errors: {},
  };

  schema = {
    departmentid: Joi.string().required().label("Department Id"),
    date: Joi.string().required().label("Date"),
    amountneeded: Joi.string().required().label("Amount Needed"),
    description: Joi.string().required().label("Description"),
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

  handleBorrowRequest = async () => {
    try {
      const res = await borrowRequest(this.state.staff);
      console.log(res);
    } catch (error) {}
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.handleBorrowRequest();
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
    const { staff } = this.state;

    return (
      <Container>
        <SideBar />

        <Content>
          <div className="text">
            <h6>
              Budget <span>{">"} Borrow Fund</span>
            </h6>
            <small>Make A Request</small>
          </div>

          <form onSubmit={this.handleSubmit}>
            <InputGroup>
              <input
                type="text"
                value={staff.departmentid}
                placeholder="DEPARTMENT ID"
                name="departmentid"
                onChange={this.handleChange}
              />

              <input
                type="text"
                value={staff.description}
                placeholder="DESCRIPTION"
                onChange={this.handleChange}
                name="description"
              />
            </InputGroup>

            <InputGroup>
              <input
                type="datetime-local"
                value={staff.date}
                placeholder="DATE"
                onChange={this.handleChange}
                name="date"
              />

              <input
                type="text"
                placeholder="AMOUNT NEEDED"
                value={staff.amountneeded}
                onChange={this.handleChange}
                name="amountneeded"
              />
            </InputGroup>
            <Btn>Submit</Btn>
          </form>
        </Content>
      </Container>
    );
  }
}

export default BorrowFund;
