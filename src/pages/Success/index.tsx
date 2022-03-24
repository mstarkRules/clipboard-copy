import React from "react";
import { Container } from "./styles";

async function copyFromUrlToClipboard() {
  let text = window.location.pathname.split("/");
  navigator.clipboard.writeText(text[1]);
}

copyFromUrlToClipboard();

export function SuccessPage() {
  return <Container>Copiado com sucesso!</Container>;
}
