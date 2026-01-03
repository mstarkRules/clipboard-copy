import styled from "styled-components";

interface ButtonContainerProps {
  variant?: "primary" | "secondary";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  padding: 16px 14px;
  background-color: ${props => props.variant === "secondary" ? "transparent" : "#2172f2"};
  border: ${props => props.variant === "secondary" ? "2px solid #2172f2" : "none"};
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  color: ${props => props.variant === "secondary" ? "#2172f2" : "#fff"};
  transition: all ease 0.2s;
  font-weight: ${props => props.variant === "secondary" ? "normal" : "600"};
  
  :hover {
    filter: brightness(0.9);
    ${props => props.variant === "secondary" && `
      background-color: rgba(33, 114, 242, 0.05);
    `}
  }

  font-size: inherit;
`;
