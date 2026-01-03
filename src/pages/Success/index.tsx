import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { decodeText, getUrlParam } from "../../lib/utils";
import CopyButton from "../../components/CopyButton";
import Button from "../../components/Button";
import { MainContainer } from "../Home/styles";

function getText() {
  let textFromUrl = getUrlParam("text");
  const decodedText = decodeText(textFromUrl as string);

  return decodedText;
}

function SuccessPage() {
  const [copied, setCopied] = useState(false);
  const [needsManualCopy, setNeedsManualCopy] = useState(false);
  const textToCopy = getText();

  useEffect(() => {
    attemptAutoCopy();
  }, []);

  async function attemptAutoCopy() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        return;
      }
      
      setNeedsManualCopy(true);
    } catch (error) {
      setNeedsManualCopy(true);
    }
  }

  function copyToClipboardFallback(text: string) {
    try {
    
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      

      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        setCopied(true);
        setNeedsManualCopy(false);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Erro ao copiar:', err);
      return false;
    }
  }

  function handleCopyClick() {
    copyToClipboardFallback(textToCopy);
  }

  function handleGoToHome() {
    window.location.href = "/";
  }
  return (
    <Container>
      <MainContainer>
        <div
          style={{
            textAlign: "center",
            paddingBottom: "24px",
          }}
        >
          <div style={{ fontSize: "18px", marginBottom: "16px" }}>
            <i>"{textToCopy}"</i>
          </div>
          {copied ? (
            <div style={{ marginTop: "8px" }}>
              <span>Copiado para sua área de transferência com </span>
              <span
                style={{
                  backgroundColor: "#57ae31",
                  borderRadius: "4px",
                  padding: "2px 6px",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                ✓ SUCESSO!
              </span>
            </div>
          ) : needsManualCopy ? (
            <div style={{ 
              marginTop: "8px",
              padding: "12px",
              backgroundColor: "#fff3cd",
              borderRadius: "4px",
              marginBottom: "16px"
            }}>
              <p style={{ margin: "0 0 12px 0", color: "#856404" }}>
                📋 Clique no botão abaixo para copiar o texto
              </p>
              <Button onClick={handleCopyClick} title="Copiar texto">
                📋 Copiar Texto
              </Button>
            </div>
          ) : (
            <div style={{ marginTop: "8px" }}>
              <span>⏳ Copiando...</span>
            </div>
          )}
        </div>
        {copied && (
          <Button 
            onClick={handleGoToHome} 
            title="Gerar novo texto"
            variant="secondary"
          >
            Gerar novo texto para compartilhar
          </Button>
        )}
      </MainContainer>
    </Container>
  );
}

export default SuccessPage;
