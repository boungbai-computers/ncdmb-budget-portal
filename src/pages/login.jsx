import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

import Input from "../common/input";
import images from "../assets/data/images";

class Login extends Form {
  state = {
    user: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  render() {
    return (
      <section className="login-wrapper">
        <div className="login-container">
          <img src={images.loginPic} alt="Login Pic" />
        </div>

        <div className="login-content">
          <div id="head-container">
            <img src={images.logo} alt="ImgLogo" className="logo" />
            <h6>NCDMB BUDGET PORTAL</h6>
          </div>

          <div className="login-form">
            <div className="textGroup">
              <h6>Welcome back!</h6>
              <p>Please provide your login credentials!</p>
            </div>

            <form onSubmit={this.handleSubmit}>
              <Input
                value={this.state.user.email}
                name="email"
                onChange={this.handleChange}
                placeholder="Username or Email"
                error={this.state.errors.email}
              />

              <Input
                value={this.state.user.password}
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                error={this.state.errors.password}
                type="password"
              />

              <button className="loginBtn">Login</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
