import styled from "styled-components"

const Input = styled.input`
  padding:0.8rem 1.2rem;
  border:1px solid var(--color-grey-300);
  border-radius:var(--border-radius-sm);
  background-color:var(--color-grey-0);
  box-shadow:var(--shadow-sm);

  
  &:-webkit-autofill {
    -webkit-text-fill-color: var(--color-grey-700);
    transition: background-color 5000s ease-in-out 0s;
  }
  
  @media(max-width: 560px){
    padding:0.4rem 0.5rem;
    font-size: 0.8rem;
  }
`

export default Input