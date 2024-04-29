import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import styled from "styled-components";

const StyledOperations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

function Dashboard() {
    return (
        <>
            <StyledOperations>
                <Heading as="h1">Dashboard</Heading>
                <DashboardFilter/>
            </StyledOperations>
            <DashboardLayout/>
        </>
    );
}

export default Dashboard;
