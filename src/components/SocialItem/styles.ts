import styled from "styled-components";

interface ContainerProps {
  type: string;
  size: "medium" | "large" | "small";
}

export const Container = styled.div<ContainerProps>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #f6f6f6;
    font-size: ${(props) => {
      switch (props.size) {
        case "small":
          return "1.2rem";
          break;
        case "medium":
          return "2rem";
          break;
        case "large":
          return "3rem";
          break;
        default:
          return "1rem";
          break;
      }
    }};
    transition: all ease 0.2s;

    :hover {
      color: ${(props) => props.type === "whatsapp" && "#34af23"};
      color: ${(props) => props.type === "linkedin" && "#fff"};
      color: ${(props) => props.type === "github" && "#111"};
      filter: brightness(0.3);
      transform: scale(1.3);
    }
  }
`;
