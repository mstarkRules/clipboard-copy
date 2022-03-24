import { useState } from "react";

import { CopyButton } from "./components/CopyButton";

function App() {
  const [count, setCount] = useState(0);

  function copyClipboard() {
    let text = location.pathname.split("/");

    navigator.clipboard.writeText(text[1]);

    alert("texto " + text + " copiado!");
  }

  copyClipboard();

  return <CopyButton text="Copiar" />;
}

export default App;
