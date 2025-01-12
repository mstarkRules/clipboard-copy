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

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 20px; */
  width: 100%;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 980px;

  /* mobile */
  @media (max-width: 980px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export const MainArea = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: red;
`;

export const TextArea = styled.div`
  width: 100%;

  p {
    text-align: left;
  }

  /* background-color: red; */
`;
