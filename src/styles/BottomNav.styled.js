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
  .icon {
    fill: white;
  }

  &:hover .icon {
    fill: green;
  }
`;
