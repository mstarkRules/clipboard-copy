import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: #2172f2;

  list-style: none;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-family: "Poppins", sans-serif;
  }
`;

export const MenuArea = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
