import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

function Button(props: ButtonProps) {
  return (
    <ButtonContainer 
      title={props.title} 
      onClick={props.onClick} 
      variant={props.variant || "primary"}
      type={props.type}
    >
      {props.children}
    </ButtonContainer>
  );
}

export default Button;
