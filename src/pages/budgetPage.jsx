import React from "react";
import styled from "styled-components";
import SideBar from "../components/sideBar";

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
    font-weight: 900;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.47);
  }

  #container {
    margin-left: 15px;
  }

  #content {
    background: #ffffff;
    box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    padding: 30px;
    width: 855px;
    justify-content: space-between;
    height: 400px;
  }

  #content .budget-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  #content .budget-content small {
    color: rgba(0, 0, 0, 0.47);
    font-size: 14px;
  }

  #content .budget-content p {
    color: rgba(0, 0, 0, 0.47);
    font-weight: 900;
    font-size: 20px;
  }

  #content .budget-content div {
    width: 350px;
  }
`;

const BudgetPage = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <div className="text">
          <h6>
            Budget{" "}
            <span>
              {" "}
              {`>`} Current Budget {`> `}
              <small>Loan Budget for Youths</small>
            </span>
          </h6>
          <h2
            style={{
              color: "rgba(1, 86, 5, 0.85)",
              fontWeight: 900,
              fontSize: "30px",
            }}
          >
            LOAN BUDGET FOR YOUTHS
          </h2>
        </div>

        <div id="container">
          <div id="content">
            <div className="budget-content">
              <div>
                <small>REQUESTOR NAME</small>
                <p>I.T. DEPARTMENT</p>
              </div>

              <div>
                <small>DATE OF REQUEST</small>
                <p>25th January, 2020</p>
              </div>

              <div>
                <small>DEPARTMENT</small>
                <p>I.T. DEPARTMENT</p>
              </div>
            </div>

            <div className="budget-content">
              <div>
                <small>BUDGET HEAD</small>
                <p>Loan Budget</p>
              </div>

              <div>
                <small>SUB BUDGET HEAD</small>
                <p>Loan Budget for Youths</p>
              </div>

              <div>
                <small>AMOUNT FOR BUDGET</small>
                <p>N30,000,000</p>
              </div>
            </div>

            <div className="budget-content">
              <div style={{ width: "100%", textAlign: "justify" }}>
                <small>BUDGET DESCRIPTION/JUSTIFICATION</small>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus recusandae aliquam veritatis placeat quibusdam
                  maxime nesciunt fuga obcaecati? Enim ducimus quas unde
                  necessitatibus delectus ipsum voluptatum quos, sit tempore a.
                </p>
              </div>
            </div>

            <div className="budget-content">
              <div style={{ width: "100%", textAlign: "justify" }}>
                <small>BUDGET DESCRIPTION/JUSTIFICATION</small>
                <section
                  style={{
                    width: "100%",
                    background: "rgba(196, 196, 196, 0.27)",
                  }}
                >
                  <article
                    style={{
                      width: "25%",
                      background: "rgba(0, 0, 0, 0.24)",
                      padding: "10px",
                      textAlign: "center",
                      fontWeight: 900,
                      color: "rgba(0, 0, 0, 0.47)",
                    }}
                  >
                    25%
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default BudgetPage;
