import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import styled from "styled-components";


const StyledOperations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media(max-width: 1170px){
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }

  @media(max-width: 450px){
    gap: 2.4rem;
    
  }
`

function Bookings() {
  return (
    <>
      <StyledOperations>
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </StyledOperations>
      <BookingTable />
    </>
  );
}

export default Bookings;
