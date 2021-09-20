import React from "react";
import styled from "styled-components";
import { Button } from "./Buttons";
import canadaFlag from '../assets/canada-flag.png';
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";

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

const FormSection = ({ data }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <FormSectionWrapper>
      <a href="tel:+7-932-400-7522" class="contact-widget__IconLink-kKXKBP fkvUye"><span>+7-932-400-7522</span></a>
      <IntroMainWrapper>
        <SectionTitle>SCHEDULE A CALL</SectionTitle>
        <LeadParagraph>Start your web development or mobile application today! Schedule a call to get a quote.</LeadParagraph>
        <FormWrapper method="post">
          <FieldWrapper>
            <FormLabelWrapper>Your Name</FormLabelWrapper>
            <FormInputWrapper value={name} onChange={evt => {
              setName(evt.target.value);
            }} />
          </FieldWrapper>
          <FieldWrapper>
            <FormLabelWrapper>Your Phone</FormLabelWrapper>
            <FormInputWithImageWrapper maxLength="12" minLength="10" placeholder="+1" value={phone} onChange={evt => {
              setPhone(evt.target.value);
            }} />
          </FieldWrapper>
          <FieldWrapper>
            <FormLabelWrapper>Your Message</FormLabelWrapper>
            <FormInputAreaWrapper value={message} onChange={evt => {
              setMessage(evt.target.value);
            }} />
          </FieldWrapper>
          <Button type="submit" modifiers={["shadow", "big", "bold", "font18"]} disabled={submitting}>
            Submit
          </Button>
        </FormWrapper>

      </IntroMainWrapper>
      <ImageWrapper>
        <StaticImage src="../assets/sketch-of-mobile-app.webp" />
      </ImageWrapper>
    </FormSectionWrapper>
  );
};

export default FormSection;
