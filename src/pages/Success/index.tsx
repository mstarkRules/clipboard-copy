import React from "react";
import { Container } from "./styles";
import { decodeText } from "../../lib/utils";
import CopyButton from "../../components/CopyButton";
import Button from "../../components/Button";
import { MainContainer } from "../Home/styles";

function getText() {
  let urlToText = window.location.pathname.split("/")[1];
  const decodedText = decodeText(urlToText);

  console.log(`original text: ${urlToText}`);

  console.log(`decoded text: ${decodedText}`);

  return decodedText;
}

function SuccessPage() {
  function handleGoToHome() {
    window.location.href = "/";
  }
  return (
    <Container>
      <MainContainer>
        "{getText()}" Copiado com sucesso!
        <Button onClick={handleGoToHome} title="Gerar novo texto">
          Gerar novo texto para compartilhar
        </Button>
      </MainContainer>
    </Container>
  );
}

export default SuccessPage;
