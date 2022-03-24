import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { AiOutlineFileDone } from "react-icons/ai";

function copyFromUrlToClipboard() {
  let text = window.location.pathname.split("/");
  let decodedUri = decodeURIComponent(text[1]);
  navigator.clipboard.writeText(decodedUri);

  return decodeURIComponent(text[1]);
}

export function SuccessPage() {
  const [loading, setLoading] = useState(true);
  const variants = {
    loading: {
      opacity: [0, 1],
      transition: { repeat: Infinity },
    },
    stop: {
      opacity: 1,
    },
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <Container>
      <p>
        {copyFromUrlToClipboard()} Copiado com <span>sucesso</span>!
      </p>
      <motion.div variants={variants} animate={loading ? "loading" : "stop"}>
        {loading ? (
          <AiOutlineFileDone size="25px" />
        ) : (
          <AiOutlineFileDone color="#2ba84c" size="25px" />
        )}
      </motion.div>
    </Container>
  );
}
