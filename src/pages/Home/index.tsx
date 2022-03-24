import React, { useState } from "react";

import { TextField } from "@mui/material";
import { Container, LinkArea, MainArea, TextArea } from "./styles";
import CopyButton from "../../components/CopyButton";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [link, setLink] = useState("");

  function handleInputValue(text: string) {
    setInputValue(text);
  }

  // async function copyFromUrlToClipboard() {
  //   let text = window.location.pathname.split("/");
  //   navigator.clipboard.writeText(text[1]);
  // }

  // copyFromUrlToClipboard();

  function verifyUrl() {
    let url = window.location.pathname.split("/");

    if (url[1].length > 0) {
      return true;
    }
    return false;
  }

  const handleSetTextLink = async (text: string) => {
    if (inputValue.length > 0) {
      let host = window.location.host;
      let linkGenerated =
        "Clique no link para copiar o texto: https://" +
        host +
        "/" +
        encodeURIComponent(text);
      let linkWithoutInfo = "https://" + host + "/" + encodeURIComponent(text);
      try {
        await navigator.clipboard.writeText(linkGenerated);
        setLink(linkWithoutInfo);
      } catch (error) {
        console.log("erro ao copiar: ", error);
      }
    } else {
      alert("Digite algum texto");
    }
  };

  return (
    <Container>
      <TextArea title="how it works">
        <h2>Como funciona?</h2>
        <p>
          Gere um link abaixo, cole no lugar onde deseja divulgar (status do
          Whatsapp, Instagram, etc).
        </p>
        <p>
          Quando o usuário clicar no link gerado, o seu texto será copiado
          automaticamente para a área de transferência dele.
        </p>
      </TextArea>

      <MainArea>
        <TextField
          style={{ width: "50%" }}
          title="enter the text to be copied"
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
        <LinkArea>
          <p>
            <strong>{link}</strong>
            <br />
            Link gerado e <span>copiado</span> para sua área de transferência!
            <br />
            Use-o para compartilhar com os seus usuários.
          </p>
        </LinkArea>
      )}
    </Container>
  );
}
