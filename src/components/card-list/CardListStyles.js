
import styled from 'styled-components';

const CardListComponent = styled.div`
    @media  (min-width: 320px){
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 120px;
    grid-gap: 20px;
  }

   @media  (min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
     grid-auto-rows: 120px;
    grid-gap: 20px;
  }
   @media  (min-width: 1200px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 120px;
    grid-gap: 20px;
  }
`;

export default CardListComponent;
