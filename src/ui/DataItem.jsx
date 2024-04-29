import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  padding: 0.8rem 0;
  
  @media(max-width: 560px){
    font-size: 1.2rem;
  }
  
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
  
  
  @media(max-width: 560px){
    & span{
      font-size: 1.4rem;
      
    }
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
