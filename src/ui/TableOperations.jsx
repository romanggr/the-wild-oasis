import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media(max-width: 560px){
    gap: 0.6rem;
  }

  //@media(max-width: 500px){
  //  flex-direction: column;
  //  gap: 2rem;
  //  
  //}
`;

export default TableOperations;
