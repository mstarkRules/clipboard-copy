import React from "react";
import { Container } from "./styles";

interface ButtonProps {
  title: string;
  text: string;
  clipboard?: string;

  setTextLink: (text: string) => void;
}

function CopyButton(props: ButtonProps) {
  return (
    <Container
      onClick={(text) => props.setTextLink(props.text)}
      title="generate link"
    >
      {props.title}
    </Container>
  );
}

export default CopyButton;
