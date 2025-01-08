import React from "react";
import { Container } from "./styles";
import { decodeText, getUrlParam } from "../../lib/utils";
import CopyButton from "../../components/CopyButton";
import Button from "../../components/Button";
import { MainContainer } from "../Home/styles";

function getText() {
  let textFromUrl = getUrlParam("text");
  const decodedText = decodeText(textFromUrl as string);

  return decodedText;
}

function SuccessPage() {
  function handleGoToHome() {
    window.location.href = "/";
  }
  return (
    <Container>
      <MainContainer>
        <div>
          "{getText()}" Copiado com{" "}
          <span
            style={{
              backgroundColor: "#57ae31",
              borderRadius: "4px",
              padding: "0 4px",
            }}
          >
            sucesso!
          </span>
        </div>
        <Button onClick={handleGoToHome} title="Gerar novo texto">
          Gerar novo texto para compartilhar
        </Button>
      </MainContainer>
    </Container>
  );
}

export default SuccessPage;
