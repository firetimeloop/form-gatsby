import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import elevation from "../utils/elevation";
import {
  primaryButtonBgColor,
  backgroundColor,
  hoverButtonBgColor,
} from "../utils/tokens/colors";

const BUTTON_MODIFIERS = {
  primary: () => css`
    background: ${primaryButtonBgColor};
    &:hover {
      background-color: ${hoverButtonBgColor};
    }
  `,
  default: () => css`
    background: ${backgroundColor};
    color: ${primaryButtonBgColor};
    border: 1px solid ${primaryButtonBgColor};
    ${elevation[1]};
    &:hover {
      background-color: ${primaryButtonBgColor};
      color: white;
    }
  `,
  transparent: () => css`
    background: transparent;
    border: 1px solid;
    border-color: ${backgroundColor};
  `,
  bold: () => css`
    font-weight: bold;
  `,
  big: () => css`
    height: 60px;
  `,
  font18: () => css`
    font-size: 18px;
  `,
  large: () => css`
    height: 75px;
  `,
  w200: () => css`
    width: 100%;
    max-width: 200px;
  `,
  w370: () => css`
    width: 100%;
    max-width: 370px;
  `,
  h75: () => css`
    height: 75px;
  `,
  shadow: () => css`
    ${elevation[1]};
    &:hover {
      ${elevation[2]};
      background-color: ${hoverButtonBgColor};
    }
  `,
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* padding: 5px 20px; */
  font-size: 16px;
  font-weight: 300;
  color: white;
  border: none;
  height: 45px;
  border-radius: 48px;
  transition: 0.3s ease box-shadow;
  background: ${primaryButtonBgColor};
  cursor: pointer;

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const CancelButton = styled(Button)`
  background: tomato;
`;
