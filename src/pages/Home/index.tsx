import React, { useState } from "react";

import { TextField } from "@mui/material";
import { Container, MainArea } from "./styles";
import CopyButton from "../../components/CopyButton";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [link, setLink] = useState("");

  function handleInputValue(text: string) {
    setInputValue(text);
  }

  function copyFromUrlToClipboard() {
    let text = window.location.pathname.split("/");
    navigator.clipboard.writeText(text[1]);
  }

  copyFromUrlToClipboard();

  function handleSetTextLink(text: string) {
    if (inputValue.length > 0) {
      let host = window.location.host;
      let linkGenerated = host + "/" + text;

      navigator.clipboard.writeText(linkGenerated);
      setLink(linkGenerated);
    } else {
      alert("Digite algum texto");
    }
  }

  return (
    <Container>
      <MainArea>
        <TextField
          onChange={(e) => handleInputValue(e.target.value)}
          label="Digite o texto a ser copiado"
          value={inputValue}
        />
        <CopyButton
          title="Gerar link"
          text={inputValue}
          setTextLink={(text) => handleSetTextLink(text)}
        />
      </MainArea>
      {link.length > 0 && (
        <>
          <p>{link}</p>
          <p>Link gerado e copiado para sua área de transferência</p>
          <h2>Como funciona?</h2>
          <p>
            Cole esse link no lugar onde deseja divulgar (status do Whatsapp,
            Instagram, etc).
          </p>
          <p>
            Quando o usuário clicar no link gerado, o seu texto será copiado
            automaticamente para a área de transferência dele.
          </p>
        </>
      )}
    </Container>
  );
}
