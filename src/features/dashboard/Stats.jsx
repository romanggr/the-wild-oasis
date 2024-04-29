import {
    HiOutlineBanknotes,
    HiOutlineBriefcase,
    HiOutlineCalendarDays,
    HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import styled from "styled-components";

const StatsContainer = styled.div`
  grid-column: span 4;
  gap: 2.4rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  @media(max-width: 1200px){
    grid-template-columns: 1fr 1fr;
    
  }
  
  @media(max-width: 560px){
    gap: 1rem;
  }
`

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
    // 1.
    const numBookings = bookings.length;

    // 2.
    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

    // 3.
    const checkins = confirmedStays.length;

    // 4.
    const occupation =
        confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
        (numDays * cabinCount);
    // num checked in nights / all available nights (num days * num cabins)

    return (
        <StatsContainer>
            <Stat
                title="Bookings"
                color="blue"
                icon={<HiOutlineBriefcase />}
                value={numBookings}
            />
            <Stat
                title="Sales"
                color="green"
                icon={<HiOutlineBanknotes />}
                value={formatCurrency(sales)}
            />
            <Stat
                title="Check ins"
                color="indigo"
                icon={<HiOutlineCalendarDays />}
                value={checkins}
            />
            <Stat
                title="Occupancy rate"
                color="yellow"
                icon={<HiOutlineChartBar />}
                value={isNaN(occupation) ? "0%" : Math.round(occupation * 100) + "%"}
            />
        </StatsContainer>
    );
}

export default Stats;
