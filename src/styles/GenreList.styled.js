import styled from "styled-components";

export const StyledGenreList = styled.div`
  text-align: right;
  padding-top: 100px;

  section {
    margin-bottom: 26px;
    z-index: 100;
  }

  h2 {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    font-size: 1.8rem;
  }

  div {
    padding-bottom: 0.2rem;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

export const Fade = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 130px;
  background: transparent;
  background: linear-gradient(0deg, transparent 0%, #020b18 35%);
`;
