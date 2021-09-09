import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between !important;
  width: 45%;
  position: absolute;
  padding: 20px;
  height: 25vh;
  align-items: center;
`;

const LeftIcon = styled(FaArrowLeft)`
  color: rgba(222, 222, 229, 0.5);
  font-weight: 900 !important;
`;

const RightIcon = styled(FaArrowRight)`
  color: rgba(222, 222, 229, 0.5);
  font-weight: 900 !important;
`;

const CarouselGist = () => {
  return (
    <div id="gistContainer">
      <h2>NCDMB Gist</h2>

      <div className="carousel">
        <div className="carouselContent"></div>

        <div className="carouselContent"></div>

        <div className="carouselContent"></div>
        <IconContainer>
          <LeftIcon />
          <RightIcon />
        </IconContainer>
      </div>
    </div>
  );
};

export default CarouselGist;
