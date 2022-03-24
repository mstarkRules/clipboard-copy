import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 50px;
  min-height: calc(100vh - 120px);
`;

export const TextArea = styled.div`
  overflow-wrap: break-word;
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

export const MainArea = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const LinkArea = styled.div`
  overflow-wrap: break-word;

  width: 80%;

  p {
    text-align: left;
    word-wrap: break-word;

    strong {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    span {
      color: #2ba84c;
      font-weight: bold;
    }
  }
`;
