import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 50px;
  min-height: calc(100vh - 120px);
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
  width: 80%;

  p {
    text-align: left;
    line-height: 30px;
    strong: {
      text-align: center;
      flex-wrap: wrap;
    }
  }
`;

export const LinkArea = styled.div`
  max-width: 80%;
  strong {
    word-wrap: break-word;
  }

  p {
    text-align: center;
    span {
      color: #2ba84c;
      font-weight: bold;
    }
  }
`;
