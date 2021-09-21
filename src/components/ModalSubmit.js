import React from "react";
import styled from "styled-components";
import { Button } from "./Buttons";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";

const ModalSubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(66, 66, 71, 0.3);
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: calc(100vw*0.020 + 25.6px);
  max-width: 836px;
  background-color: #fff;
`;

const ImageWrapper = styled.div`
  width: 64px;
`;

const ModalHeader = styled.h2`
  color: #424247;
  font: normal normal 300 46px/52px Noto Sans TC;
  letter-spacing: 0.92px;
  margin: 32px 0 16px;
`;

const ModalParagraph = styled.p`
  color: #424247;
  font: normal normal 100 20px/35px Noto Sans TC;
  letter-spacing: 0px;
  margin: 32px 0 16px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 106px;
`;

const ModalSubmit = (props) => {
  return (
    <ModalSubmitWrapper>
      <ModalWrapper>
        <ImageWrapper>
          <StaticImage alt="paper plane" src="../assets/plane.svg" />
        </ImageWrapper> 
        <ModalHeader>Your request has been submitted</ModalHeader>
        <ModalParagraph>We will contact you as soon as possible. If you have any questions, please contact us directly at lk@cappers.ca or by phone 1-647-300-2492.</ModalParagraph>
        <ButtonWrapper>
          <Button onClick={evt => {
            props.setIsModalVisible(false);
          }} type="submit" modifiers={["shadow", "bold", "font18"]}>Send</Button>
        </ButtonWrapper>
      </ModalWrapper>
    </ModalSubmitWrapper>
  );
};

export default ModalSubmit;
