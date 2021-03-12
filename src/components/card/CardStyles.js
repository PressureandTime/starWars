import styled from 'styled-components';

export const StyledCardChild = styled.div`
  display: flex;
`;

export const StyledCardChild2 = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;

export const StyledCardChild3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 70px;
  grid-gap: 5px;

  p {
    padding: 10px;
  }

  @media (min-width: 320px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 50px;
    grid-gap: 5px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 50px;
    grid-gap: 5px;
  }
  @media (min-width: 1200px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 50px;
    grid-gap: 10px;
  }
`;

export const StyledCardComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;
