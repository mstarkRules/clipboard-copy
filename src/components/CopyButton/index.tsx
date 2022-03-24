import React from "react";
import { Container } from "./styles";

interface ButtonProps {
  text: string;
  clipboard?: string;
}

function CopyButton(props: ButtonProps) {
  return <Container>{props.text}</Container>;
}

export default CopyButton;
