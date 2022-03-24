import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 10px;
  height: calc(100vh - 120px);

  p {
    text-align: center;
    span {
      color: #2ba84c;
    }
  }
`;
