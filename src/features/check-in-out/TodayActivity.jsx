import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import {useTodayActivity} from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: span 2;

  overflow-x: scroll;


  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-brand-600);
    border-radius: 4px;
    border: 2px solid var(--color-grey-0);
  }

  @media (max-width: 1400px) {
    grid-column: span 4;
  }
`;

const TodayList = styled.ul`
  min-width: 500px;
  max-height: 200px;


  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayActivity() {
    const {isLoading, activities} = useTodayActivity()

    return (
        <StyledToday>
            <Row type="horizontal">
                <Heading as="h2">Today</Heading>
            </Row>
            {!isLoading
                ? activities.length > 0 ?
                    <TodayList>
                        {activities.map(item => <TodayItem activity={item} key={item.id}/>)}
                    </TodayList>
                    : <NoActivity>No activity today...</NoActivity>
                : <Spinner/>}
        </StyledToday>
    );
}

export default TodayActivity;
