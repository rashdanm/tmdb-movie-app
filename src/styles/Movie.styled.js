import styled from "styled-components";

export const StyledMovie = styled.div`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.2);
  margin: 8px;

  &:hover > div {
    color: white;
    font-weight: 600;
  }

  div {
    &:hover > img {
      border: 4px solid white;
    }
  }
`;

//border: 2px solid white;
//transform: scale(0.95);
export const Text = styled.div`
  width: 80%;
  padding-bottom: 0.5rem;
`;
