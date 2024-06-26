import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  @media(max-width: 560px){
    font-size: 1rem;
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
  
  @media(max-width: 560px){
    column-gap: 0.8rem;
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;


  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  @media(max-width: 560px){
    font-size: 0.8rem;
    padding: 1.6rem 1.5rem 1.6rem 1rem;
  }
  
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  
  @media(max-width: 560px){
    padding: 1.6rem 2rem 1.6rem 1rem;
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;



const TableContext = createContext()

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">
        {children}
      </StyledTable>
    </TableContext.Provider>)
}

function Header({ children }) {
  const { columns } = useContext(TableContext)
  return (
    <StyledHeader role="row" columns={columns}>
      {children}
    </StyledHeader>
  )
}
function Row({ children }) {
  const { columns } = useContext(TableContext)
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  )
}

function Body({ data, render }) {
  return (
    <StyledBody>
      {data.map(render)}
    </StyledBody>
  )
}


Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table

