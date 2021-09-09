import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #e5e5e5;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const Content = styled.div`
  margin: 80px 50px;
  width: 55%;

  .nominate-staff {
    width: 100%;
  }

  .nominate-staff h3 {
    font-family: Roboto;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    color: rgba(224, 189, 6, 0.8);
  }

  .nominate-staff h3 span {
    color: rgba(1, 86, 5, 0.85);
  }

  .nominate-staff small {
    font-family: Roboto;
    font-weight: 900;
    font-size: 15px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.47);
  }

  .nominate-staff #btn {
    display: block;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 23px;
    margin-top: 20px;
    color: rgba(1, 86, 5, 0.63);
    background: none;
    box-sizing: border-box;
    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    border: 4px solid rgba(1, 86, 5, 0.63);
    width: 100px;
    padding: 5px;
    cursor: pointer;
    transition: ease-in-out all 0.3s;
  }

  .nominate-staff #btn:hover {
    background: rgba(1, 86, 5);
    color: white;
  }

  textarea {
    outline: none;
    border-bottom: 3px solid rgba(0, 0, 0, 0.34);
    opacity: 0.6;
    width: 100%;
    background: transparent;
    padding-bottom: 10px;
    resize: none;
    margin-bottom: 20px;
  }

  textarea::placeholder {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    margin: 20px auto;
    width: 80%;

    .nominate-staff {
      width: 100%;
    }

    .nominate-staff small {
      line-height: 15px;
    }

    .nominate-staff #btn {
      width: 100%;
    }

    .nominate-staff #btn:hover {
      background: rgba(1, 86, 5);
      color: white;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;

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

  @media screen and (max-width: 768px) {
    flex-direction: column;

    input {
      width: 100%;
      font-weight: 300;
    }
  }
`;
