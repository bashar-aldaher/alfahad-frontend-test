import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Define prop types for CustomBtn
interface CustomBtnProps {
  text: string;
  onClickFn?: () => void;
  link?: string;
  isExternal?: boolean;
  id?: string;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  width?: string;
  firstColor?: string;
  secondColor?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  paddingTop?: string;
  paddingBottom?: string;
  fontSize?: string;
  borderRadius?: string;
}

// Define props specifically for Styles, excluding 'text'
type StyledProps = Omit<
  CustomBtnProps,
  "text" | "onClickFn" | "link" | "isExternal" | "isDisabled" | "type" | "id"
>;

const Styles = styled.div<StyledProps>`
  button {
    all: unset;
    font-weight: 400;
    text-align: center;
    cursor: pointer;

    transition: all.3s;
    text-transform: capitalize;
    height: 100%;
    width: ${({ width }) => (width ? width : "140px")};
    background: ${({ firstColor, secondColor, bgColor }) =>
      firstColor && secondColor
        ? `linear-gradient(${firstColor}, ${secondColor})`
        : bgColor
        ? bgColor
        : `transparent`};
    color: ${({ textColor }) => (textColor ? textColor : "white")};
    padding-top: 0.5rem;
    padding-bottom: 0.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border: 1px solid
      ${({ borderColor }) => (borderColor ? borderColor : "#ffffff60")};
    border-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "0.5rem !important"};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.1rem")};
    backdrop-filter: blur(48px);
    box-shadow: 0px 0px 12px 0px #ffffff33 inset;
    &:disabled,
    &[disabled] {
      border-color: var(--main-color);
    }
    &:hover,
    &:active,
    &:focus-visible {
      font-weight: 700;
      background: ${({ firstColor, secondColor, bgColor }) =>
        firstColor && secondColor
          ? `linear-gradient(${firstColor}, ${secondColor})`
          : bgColor
          ? bgColor
          : `transparent`} !important;
      border: 1px solid
        ${({ borderColor }) => (borderColor ? borderColor : "#ffffff60")} !important;
    }
  }
`;

const CustomBtn: React.FC<CustomBtnProps> = ({
  text,
  onClickFn,
  link,
  isExternal = false,
  id,
  isDisabled = false,
  type = "button",
  width,
  firstColor,
  secondColor,
  bgColor,
  textColor,
  borderColor,
  paddingTop,
  paddingBottom,
  fontSize,
  borderRadius,
}) => {
  return (
    <Styles
      firstColor={firstColor}
      secondColor={secondColor}
      textColor={textColor}
      borderColor={borderColor}
      width={width}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      fontSize={fontSize}
      bgColor={bgColor}
      borderRadius={borderRadius}
    >
      {link ? (
        isExternal ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button>{text}</Button>
          </a>
        ) : (
          <Link id={id} to={link}>
            <Button>{text}</Button>
          </Link>
        )
      ) : (
        <Button id={id} onClick={onClickFn} disabled={isDisabled} type={type}>
          {text}
        </Button>
      )}
    </Styles>
  );
};

export default CustomBtn;
