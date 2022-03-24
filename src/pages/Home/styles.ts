import styled from "styled-components";

export const Container = styled.div`
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

export const MainArea = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TextArea = styled.div`
  max-width: 80%;

  p {
    text-align: left;
  }

  /* background-color: red; */
`;
