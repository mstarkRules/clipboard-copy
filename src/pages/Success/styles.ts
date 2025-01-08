import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 50px;
  height: calc(100vh - 120px);

  p {
    text-align: center;
  }
`;
