import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";

const StyledBookingDataBox = styled.section`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono",serif;
    font-size: 2rem;
    margin-left: 4px;
  }
  
  @media(max-width: 1150px){
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
  }

  @media(max-width: 620px) {
    padding: 2rem 1rem;
    gap: 1rem;
    
    & p{
      font-size: 1.4rem;
    }
    
    & svg{
      width: 2.4rem;
      height: 2.4rem;
    }

    & span{
      font-size: 1.6rem;
    }
  }

  @media(max-width: 405px) {
    gap: 0.6rem;

    & p{
      font-size: 1.1rem;
    }

    & svg{
      width: 1.8rem;
      height: 1.8rem;
    }

    & span{
      font-size: 1.4rem;
    }
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;

  @media(max-width: 968px){
    padding: 3.2rem 2rem 1.2rem;
    
  }

  @media(max-width: 560px){
    padding: 3.2rem 1rem 1.2rem;

  }
`;

const Guest = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 3rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }


  @media(max-width: 600px){
    & p{
      font-size: 1.2rem;
    }

    & span{
      font-size: 1rem;
    }
  }
`;

const GuestData = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media(max-width: 600px){
    gap: 1rem;
  }
`

const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  
  @media(min-width: 1200px){
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
    
  }
`

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.ispaid === "true" ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.ispaid === "true" ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }

  @media(max-width: 768px){
    padding: 1.6rem 1rem;

  }
  
  @media(max-width: 560px){
    font-size: 1.2rem;

  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;


function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </Header>

      <Section>
        <Guest>
          <GuestData>
              {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
            <p>
              {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
            </p>
          </GuestData>
          <PersonalData>
            <p>{email}</p>
            <p>National ID {nationalID}</p>
          </PersonalData>

        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included ?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <Price ispaid={isPaid? "true" : "false"}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </Price>
      </Section>

      <Footer>
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
