import styled from "styled-components";

export const StyledMovieList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

export const Row = styled.div`
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
