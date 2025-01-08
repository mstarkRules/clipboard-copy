import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 16px 14px;
  background-color: #2172f2;
  /* border: none; */
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  color: #fff;
  transition: all ease 0.2s;
  :hover {
    filter: brightness(0.9);
  }
`;
