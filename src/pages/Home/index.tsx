import React from "react";

import { TextField } from "@mui/material";
import { Container, MainArea } from "./styles";
import CopyButton from "../../components/CopyButton";

export function Home() {
  return (
    <Container>
      <MainArea>
        <TextField label="Digite o texto a ser copiado" />
        <CopyButton text="Gerar link" />
      </MainArea>
    </Container>
  );
}
