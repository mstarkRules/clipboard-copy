import { useState } from "react";

import { Home } from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  function copyClipboard() {
    let text = location.pathname.split("/");

    navigator.clipboard.writeText(text[1]);

    alert("texto " + text + " copiado!");
  }

  return <Home />;
}

export default App;
