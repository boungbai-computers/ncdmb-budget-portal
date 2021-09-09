import React from "react";
import { FaDownload, FaShare } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  background: white;
  width: 350px;
  height: 500px;
  padding: 10px;
  align-items: center;
  display: flex;
  padding: 20px;
  flex-direction: column;

  h2 {
    font-family: Raleway !important;
  }

  p {
    font-family: Raleway !important;
    font-weight: 500;
    text-align: justify;
    word-spacing: 0px;
    line-height: 40px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  width: 80px;
`;

const SupportingDocuments = () => {
  return (
    <Wrapper>
      <Flex>
        <div
          style={{
            display: "flex",
            background: "#C4C4C4",
            padding: "10px",
            borderRadius: "50px",
          }}
        >
          <FaDownload style={{ cursor: "pointer" }} />
        </div>

        <div
          style={{
            display: "flex",
            background: "#C4C4C4",
            padding: "10px",
            borderRadius: "50px",
          }}
        >
          <FaShare style={{ cursor: "pointer" }} />
        </div>
      </Flex>

      <Content>
        <h2>Lorem</h2>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit laborum voluptatum nostrum adipisci voluptate
            consequuntur velit hic recusandae molestias ea dolor autem libero
            iste suscipit enim id fuga voluptates, impedit magnam maiores vel?
            Eum molestiae facere, repudiandae, fuga, eius odio ducimus ab ad
            excepturi natus ratione quibusdam? Earum, reprehenderit ipsam.
          </p>
        </div>
      </Content>
      <div
        style={{
          zIndex: "1",
          background: "rgba(4, 4, 4, 0.54)",
          marginTop: "15px",
          width: "500px",
          padding: "30px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ background: "white", width: "30px", height: "40px" }}
        ></div>
        <div
          style={{ background: "white", width: "30px", height: "40px" }}
        ></div>
        <div
          style={{ background: "white", width: "30px", height: "40px" }}
        ></div>
        <div
          style={{ background: "white", width: "30px", height: "40px" }}
        ></div>
        <div
          style={{ background: "white", width: "30px", height: "40px" }}
        ></div>
      </div>
    </Wrapper>
  );
};

export default SupportingDocuments;
