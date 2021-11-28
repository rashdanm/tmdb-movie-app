import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: black;
`;

export const Logo = styled.div``;

export const Icon = styled.div`
  color: white;
  z-index: 900;
`;

export const SearchNav = styled.div`
  position: fixed;
  z-index: 800;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: black;
  overflow-x: auto;
  transition: transform 0.5s ease-in-out;
`;

export const GenreNav = styled.div`
  position: fixed;
  z-index: 800;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: black;
  overflow-x: auto;
  transition: transform 0.5s ease-in-out;
`;
