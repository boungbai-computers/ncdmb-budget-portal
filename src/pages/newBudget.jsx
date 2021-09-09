import React from "react";
import Form from "../common/form";

import Joi from "joi-browser";
import SideBar from "../components/sideBar";

class NewBudget extends Form {
  state = {
    user: {
      requestorname: "",
      department: "",
      dateofrequest: "",
      amountforbudget: "",
      budgethead: "",
      budgetsubhead: "",
      budgetdescription: "",
    },
    errors: {},
  };

  schema = {
    requestorname: Joi.string().required().label("Requestor Name"),
    department: Joi.string().required().label("Department"),
    dateofrequest: Joi.string().required().label("Date of Request"),
    amountforbudget: Joi.string().required().label("Amount for Budget"),
    budgethead: Joi.string().required().label("Budget Head"),
    budgetsubhead: Joi.string().required().label("Budget Sub-Head"),
    budgetdescription: Joi.string()
      .required()
      .label("Budget Description/Justification"),
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { user } = this.state;

    return (
      <section className="new-budget-section">
        <SideBar />

        <div className="new-budget-content">
          <h3>
            Budget <i style={{ color: "black", fontStyle: "normal" }}>{">"}</i>{" "}
            <span>New Budget</span>
          </h3>

          <small>Kindly fill the form to make a budget request.</small>

          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <input
                type="text"
                placeholder="REQUESTOR NAME"
                name="requestorname"
                value={user.requestorname}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="DEPARTMENT"
                name="department"
                value={user.department}
                onChange={handleChange}
              />
            </div>

            <div className="inputGroup">
              <input
                type="date"
                placeholder="DATE OF REQUEST"
                name="dateofrequest"
                value={user.dateofrequest}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="AMOUNT FOR BUDGET"
                name="amountforbudget"
                value={user.amountforbudget}
                onChange={handleChange}
              />
            </div>

            <div className="inputGroup">
              <input
                type="text"
                placeholder="BUDGET HEAD"
                name="budgethead"
                value={user.budgethead}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="BUDGET SUB-HEAD"
                name="budgetsubhead"
                value={user.budgetsubhead}
                onChange={handleChange}
              />
            </div>

            <textarea
              placeholder="BUDGET DESCRIPTION/JUSTIFICATION"
              name="budgetdescription"
              value={user.budgetdescription}
              onChange={handleChange}
            ></textarea>

            <button className="newBudgetbtn">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default NewBudget;
