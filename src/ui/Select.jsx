import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
    props.type === "white"
      ? "var(--color-grey-100)"
      : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);

  @media(max-width: 868px){
    font-size: 1.05rem;
  }

  @media(max-width: 500px){
    font-size: 0.8rem;
    padding: 0.8rem 0.5rem;
    
  }
`;


const Select = ({ options, value, type, onChange }) => {
  return (
    <StyledSelect type={type} onChange={onChange} value={value}>
      {options.map(option => <option value={option.value} key={option.value}>{option.label}</option>)}
    </StyledSelect>
  )
}

export default Select
