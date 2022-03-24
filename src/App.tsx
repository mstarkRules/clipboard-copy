import { useState } from "react";
import Header from "./components/Header";

import { Home } from "./pages/Home";

import { GlobalStyle } from "./styles/global";

function App() {
  const [count, setCount] = useState(0);

  function copyClipboard() {
    let text = location.pathname.split("/");

    navigator.clipboard.writeText(text[1]);

    alert("texto " + text + " copiado!");
  }

  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
