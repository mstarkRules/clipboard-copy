import React, { useEffect } from "react";
import { Container } from "./styles";

function copyFromUrlToClipboard() {
  let text = window.location.pathname.split("/");
  navigator.clipboard.writeText(text[1].replaceAll("%20", " "));

  console.log("rtexttt: ", text[1]);
  return text[1].replaceAll("%20", " ");
}

export function SuccessPage() {
  // useEffect(() => {
  //   copyFromUrlToClipboard();
  // });
  return <Container>{copyFromUrlToClipboard()} Copiado com sucesso!</Container>;
}
