import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTableOperations from "../ui/CabinTableOperations";
import styled from "styled-components";


const StyledOperations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media(max-width: 1100px){
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    
  }
`

function Cabins() {

  return (
    <>
      <StyledOperations>
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </StyledOperations>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
