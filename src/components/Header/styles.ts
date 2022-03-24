import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: #1a1a1a;

  list-style: none;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-family: "Poppins", sans-serif;
  }
`;
