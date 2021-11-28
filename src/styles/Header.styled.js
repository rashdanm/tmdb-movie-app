import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: transparent;
  background-image: linear-gradient(360deg, transparent 2%, #020b18 30%);
  padding-top: 2rem;
  padding-bottom: 3rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 900;
`;

export const Icon = styled.div`
  color: white;
  z-index: 900;
  @media (max-width: 768px) {
    display: none;
  }
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

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
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
