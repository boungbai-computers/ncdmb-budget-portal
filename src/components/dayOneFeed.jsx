import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import Head from "./head";

const Wrapper = styled.div`
  background: #e5e5e5;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;

  small {
    color: rgba(0, 0, 0, 0.74);
    font-weight: 900;
    font-size: 15px;
    margin-right: 38%;
    margin-top: 10px;
    cursor: pointer;
    transition: ease-in-out all 0.3s;
  }

  small:hover {
    color: black;
  }

  .claimText {
    display: block;
    margin-right: 20px;
    width: 50%;
  }

  .claimText h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    color: #015605;
  }

  .claimText small {
    color: rgba(0, 0, 0, 0.47);
  }
`;

const InputGroup = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 10px 0px;

  input {
    width: 48%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.34);
    opacity: 0.6;
    background: none;
    padding-bottom: 5px;
    outline: none;
  }

  input::placeholder {
    color: rgba(0, 0, 0, 0.74);
    font-weight: 900;
  }
`;

const Button = styled.button`
  color: #015605;
  border: 4px solid #015605;
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25));
  border-radius: 50px;
  width: 120px;
  font-weight: 900;
  background: none;
  margin: 0px 25%;
  padding: 10px;
  cursor: pointer;
  transition: ease-in-out all 0.3s;

  &:hover {
    background: #015605;
    color: white;
  }
`;

class DayOneFeed extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Head />

        <Content>
          <div className="claimText">
            <h4>Make Claim</h4>
            <small>Kindly fill the form the make a claim</small>
          </div>

          <InputGroup>
            <input type="text" placeholder="Abuja conference meeting" />
            <input type="text" placeholder="Accomodation" />
          </InputGroup>

          <InputGroup>
            <input type="text" placeholder="Hotel name" />
            <input type="text" placeholder="Number of extra nights" />
          </InputGroup>

          <InputGroup>
            <input type="text" placeholder="Cost per night" />
            <input type="text" placeholder="Total Cost" />
          </InputGroup>

          <InputGroup>
            <input type="text" placeholder="Abuja conference meeting" />
            <input type="text" placeholder="Feeding" />
          </InputGroup>

          <InputGroup>
            <input type="text" placeholder="1" />
            <input type="text" placeholder="3" />
          </InputGroup>

          <InputGroup>
            <input type="text" placeholder="Day e.g Day 1" />

            <div
              style={{
                // background: "yellow",
                width: "48%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <input
                type="text"
                placeholder="Breakfast"
                style={{ width: "50%" }}
              />
              <input type="text" placeholder="Cost" style={{ width: "40%" }} />
            </div>
          </InputGroup>

          <InputGroup>
            <div
              style={{
                // background: "yellow",
                width: "48%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <input type="text" placeholder="Lunch" style={{ width: "50%" }} />
              <input type="text" placeholder="Cost" style={{ width: "40%" }} />
            </div>

            <div
              style={{
                // background: "yellow",
                width: "48%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <input
                type="text"
                placeholder="Dinner"
                style={{ width: "50%" }}
              />
              <input type="text" placeholder="Cost" style={{ width: "40%" }} />
            </div>
          </InputGroup>

          <small>
            <FaPlus /> ADD ANOTHER CLAIM
          </small>
        </Content>
        <Button>Submit</Button>
      </Wrapper>
    );
  }
}

export default DayOneFeed;
