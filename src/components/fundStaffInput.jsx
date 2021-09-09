import Joi from "joi-browser";
import React, { Component } from "react";

class FundStaffInput extends Component {
  state = {
    user: {
      amount: "",
    },
  };

  schema = {
    amount: Joi.string().required().label("Amount"),
  };

  validate = () => {
    const result = Joi.validate(this.state.user, this.schema, {
      abortEarly: false,
    });

    if (!result.error) return null;
    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
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

    const user = { ...this.state.user };

    user[input.name] = input.value;
    this.setState({ user, errors });
  };

  render() {
    const { amount } = this.state.user;
    const { handleChange } = this;

    return (
      <div className="inputWrapper">
        <input
          type="text"
          placeholder="ENTER AMOUNT HERE"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default FundStaffInput;
