import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <ButtonContainer title={props.title} onClick={props.onClick}>
      {props.children}
    </ButtonContainer>
  );
}

export default Button;
