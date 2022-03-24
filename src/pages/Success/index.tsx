import React from "react";
import { Container } from "./styles";

function getText() {
  let urlToText = window.location.pathname.split("/")[1];

  return urlToText;
}

function SuccessPage() {
  return <Container>{getText()} Copiado com sucesso!</Container>;
}

export default SuccessPage;
