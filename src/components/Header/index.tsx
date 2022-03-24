import React from "react";
import { Container, MenuArea } from "./styles";

function Header() {
  return (
    <Container>
      <MenuArea>
        <a href="/" title="go to home page">
          <li>Home</li>
        </a>
        <a href="#contact" title="go to contact section">
          <li>Contato</li>
        </a>
      </MenuArea>
    </Container>
  );
}

export default Header;
