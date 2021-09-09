import React, { Component } from "react";
import Joi from "joi-browser";
import images from "../assets/data/images";
import Input from "../common/input";
import { signUpUser } from "../services/userService";
import { getDepartments } from "../services/departmentService";

class SignUp extends Component {
  state = {
    user: {
      fullname: "",
      email: "",
      staffid: "",
      department: "",
      password: "",
      repeatpassword: "",
      designation: "",
    },
    errors: {},
  };

  schema = {
    fullname: Joi.string().required().label("Full Name"),
    email: Joi.string().required().email().label("Email"),
    staffid: Joi.string().required().label("Staff Id"),
    department: Joi.string().required().label("Department"),
    password: Joi.string().required().label("Password"),
    repeatpassword: Joi.string().required().label("Repeat Password"),
    designation: Joi.string().required().label("Designation"),
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

  createNewUser = async () => {
    try {
      const user = { ...this.state.user };
      const res = await signUpUser(user);

      console.log(res);
      console.log(this.state.user);
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.createNewUser();
  };

  async componentDidMount() {
    try {
      const res = await getDepartments();
      console.log(res);
    } catch (error) {}
  }

  render() {
    return (
      <section className="sign-up-wrapper">
        <div className="sign-up-container">
          <img src={images.signupPic} alt="" />
        </div>

        <div className="signup-content">
          <div id="head-container">
            <img src={images.logo} alt="ImgLogo" className="logo" />
            <h6>NCDMB BUDGET PORTAL</h6>
          </div>

          <div id="formDiv">
            <div className="txtGroup">
              <h6>Create an account</h6>
              <p>Kindly fill the fields to signup</p>
            </div>

            <form onSubmit={this.handleSubmit}>
              <Input
                name="fullname"
                placeholder="Full Name"
                value={this.state.user.fullname}
                onChange={this.handleChange}
                error={this.state.errors.fullname}
              />

              <Input
                name="email"
                placeholder="Email"
                value={this.state.user.email}
                onChange={this.handleChange}
                error={this.state.errors.email}
              />

              <Input
                name="staffid"
                placeholder="Staff Id"
                value={this.state.user.staffid}
                onChange={this.handleChange}
                error={this.state.errors.staffid}
              />

              <Input
                name="department"
                placeholder="Department"
                value={this.state.user.department}
                onChange={this.handleChange}
                error={this.state.errors.department}
              />

              <Input
                name="designation"
                placeholder="Designation"
                value={this.state.user.designation}
                onChange={this.handleChange}
                error={this.state.errors.designation}
              />

              <Input
                name="password"
                placeholder="Password"
                value={this.state.user.password}
                type="password"
                onChange={this.handleChange}
                error={this.state.errors.password}
              />

              <Input
                name="repeatpassword"
                placeholder="Repeat Password"
                type="password"
                value={this.state.user.repeatpassword}
                onChange={this.handleChange}
                error={this.state.errors.repeatpassword}
              />

              <button id="signupBtn">Signup</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
