import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Buttons";

import canadaFlag from '../assets/canada-flag.png';
import { StaticImage } from "gatsby-plugin-image";

const FormSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1182px;
  box-sizing: border-box;
  width: 100%;

  padding: 0;
  margin: 0 auto;
  margin-bottom: 64px;
  margin-top: calc(100vw*0.021 + 56.233px);

  @media (max-width: 1280px) {
    padding: 0 calc(-100vw*0.059 + 75px);
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 15px;
  }
`;

const ImageWrapper = styled.div`
  width: 48%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const IntroMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

const SectionTitle = styled.h2`
  font: normal normal 900 48px/58px Noto Sans TC;
  font-size: calc(100vw*0.016 + 18.175px);
  line-height: calc(100vw*0.015 + 29.417px);
  text-align: left;
  color: #424247;
  letter-spacing: calc(100vw*0.0003 + 0.363px);
  text-transform: uppercase;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    letter-spacing: 0.52px;
  }
`;

const LeadParagraph = styled.p`
  font: normal normal 100 20px/35px Noto Sans TC;
  font-size: calc(100vw*0.004 + 12.544px);
  line-height: calc(100vw*0.006 + 22.57px);
  text-align: left;
  color: #424247;
  letter-spacing: 0px;

  margin-bottom: calc(100vw*0.004 + 22.544px);

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: calc(100vw*0.005 + 22.058px);
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

const FormLabelWrapper = styled.label`
  font-size: 16px;
  line-height: 27px;
  font-weight: 500;
  margin-bottom: 12px;
`;

const FormInputWrapper = styled.input`
  border: 1px solid #E6E6EB;
  border-radius: 8px;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 24px;
  color: #424247;
`;

const FormInputWithImageWrapper = styled.input`
  border: 1px solid #E6E6EB;
  border-radius: 8px;
  padding: 16px 20px;
  padding-left: 64px;
  font-size: 16px;
  line-height: 24px;
  color: #424247;
  
  background-image: url(${canadaFlag});
  background-repeat: no-repeat;
  background-position: 20px center;

  @media (max-width: 1024px) {
    &::placeholder {
      color: #fff;
    }
  }
`;

const FormInputAreaWrapper = styled.textarea`
  border: 1px solid #E6E6EB;
  border-radius: 8px;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 24px;
  color: #424247;
  min-height: 168px;
`;

const FormSection = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", "name": name, "phone": phone, "message": message })
    })
      .then(() => props.setIsModalVisible(true))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <>
    <FormSectionWrapper>
        <IntroMainWrapper>
          <SectionTitle>SCHEDULE A CALL</SectionTitle>
          <LeadParagraph>Start your web development or mobile application today! Schedule a call to get a quote.</LeadParagraph>
          <FormWrapper name="contact" method="post" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <FieldWrapper>
              <FormLabelWrapper htmlFor="contact__name">Your Name</FormLabelWrapper>
              <FormInputWrapper id="contact__name" type="text" name="name" onChange={e => {
                setName(e.target.value);
              }}/>
            </FieldWrapper>
            <FieldWrapper>
              <FormLabelWrapper htmlFor="contact__phone">Your Phone</FormLabelWrapper>
              <FormInputWithImageWrapper placeholder="+1" id="contact__phone" type="text" name="phone" onChange={e => {
                setPhone(e.target.value);
              }}/>
            </FieldWrapper>
            <FieldWrapper>
              <FormLabelWrapper htmlFor="contact__message">Your Message</FormLabelWrapper>
              <FormInputAreaWrapper id="contact__message" name="message" onChange={e => {
                setMessage(e.target.value);
              }}></FormInputAreaWrapper>
            </FieldWrapper>
            <FieldWrapper>
              <Button type="submit" modifiers={["shadow", "big", "bold", "font18"]}>Send</Button>
            </FieldWrapper>
          </FormWrapper>
        </IntroMainWrapper>
        <ImageWrapper>
          <StaticImage alt="Mobile app sketch" src="../assets/sketch-of-mobile-app.webp" />
        </ImageWrapper> 
    </FormSectionWrapper>
    </>
  );
};

export default FormSection;
