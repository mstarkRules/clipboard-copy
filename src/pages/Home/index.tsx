import React, { useEffect, useState } from "react";

import { TextField } from "@mui/material";
import { Container, MainArea, MainContainer, TextArea } from "./styles";
import CopyButton from "../../components/CopyButton";
import SuccessPage from "../Success";
import { decodeText } from "../../lib/utils";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [link, setLink] = useState("");

  function handleInputValue(text: string) {
    setInputValue(text);
  }

  useEffect(() => {
    async function copyFromUrlToClipboard() {
      let text = window.location.pathname.split("/");

      const decodedText = decodeText(text[1]);

      navigator.clipboard.writeText(decodedText);
    }

    copyFromUrlToClipboard();
  }, []);

  function verifyUrl() {
    let url = window.location.pathname.split("/");

    if (url[1].length > 0) {
      return true;
    }
    return false;
  }

  async function handleSetTextLink(text: string) {
    if (inputValue.length > 0) {
      let host = window.location.host;
      let linkGenerated = host + "/" + text;

      await navigator.clipboard.writeText(linkGenerated);
      setLink(linkGenerated);

      console.log("texto do link: ", linkGenerated);
    } else {
      alert("Digite algum texto");
    }
  }

  return (
    <Container>
      {verifyUrl() ? (
        <SuccessPage />
      ) : (
        <MainContainer>
          <TextArea>
            <h2>Como funciona?</h2>
            <div style={{ paddingBottom: "16px" }}>
              <p>
                Escreva um texto, gere um link e cole no lugar onde deseja
                divulgar (status do Whatsapp, Instagram, etc).
              </p>
              <p>
                Quando o usuário clicar no link gerado, o seu texto será copiado
                automaticamente para a área de transferência dele.
              </p>
            </div>
          </TextArea>

          <TextField
            onChange={(e) => handleInputValue(e.target.value)}
            label="Digite o texto a ser copiado"
            value={inputValue}
            fullWidth
            style={{ paddingBottom: "8px" }}
          />
          <CopyButton
            title="Gerar link"
            text={inputValue}
            setTextLink={(text) => handleSetTextLink(text)}
          />

          {link.length > 0 && (
            <>
              <p>
                <strong>{link}</strong>
                <br />
                Link gerado e copiado para sua área de transferência
              </p>
            </>
          )}
        </MainContainer>
      )}
    </Container>
  );
}
