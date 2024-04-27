import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import styled from "styled-components";


const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media(max-width: 560px){
    gap: 0.6rem;
  }
  
  @media(max-width: 450px){
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    
  }


`;
function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
