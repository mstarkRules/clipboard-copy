import React from "react";
import { Container, MenuArea } from "./styles";

function Header() {
  return (
    <Container>
      <MenuArea>
        <a href="">
          <li>Home</li>
        </a>
        <a href="">
          <li>Sobre</li>
        </a>
      </MenuArea>
    </Container>
  );
}

export default Header;
