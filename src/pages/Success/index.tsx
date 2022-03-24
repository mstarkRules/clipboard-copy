import React, { useEffect } from "react";
import { Container } from "./styles";

function copyFromUrlToClipboard() {
  let text = window.location.pathname.split("/");
  let decodedUri = decodeURIComponent(text[1]);
  navigator.clipboard.writeText(decodedUri);

  return decodeURIComponent(text[1]);
}

export function SuccessPage() {
  // useEffect(() => {
  //   copyFromUrlToClipboard();
  // });
  return <Container>{copyFromUrlToClipboard()} Copiado com sucesso!</Container>;
}
