import styled from "styled-components";

export const StyledBottomNav = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: flex-row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 0.3rem;
  padding-top: 0.5rem;
  background-color: #020b18;
  border-top: 1px solid white;
  z-index: 900;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  .icon {
    fill: white;
  }

  &:hover .icon {
    fill: green;
  }
`;

export const SearchNav = styled.div`
  position: fixed;
  z-index: 700;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding-top: 50px;
  background: transparent;
  background: linear-gradient(265deg, transparent 0%, #020b18 58%);
  overflow-x: auto;
  transition: transform 0.5s ease-in-out;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const GenreNav = styled.div`
  position: fixed;
  padding-bottom: 100px;
  z-index: 800;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding-right: 5vw;
  background: transparent;
  background-image: linear-gradient(to left, #020b18, transparent);
  transition: transform 0.5s ease-in-out;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (min-width: 768px) {
    display: none;
  }
`;
