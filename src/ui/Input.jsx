import styled from "styled-components"

const Input = styled.input`
  padding:0.8rem 1.2rem;
  border:1px solid var(--color-grey-300);
  border-radius:var(--border-radius-sm);
  background-color:var(--color-grey-0);
  box-shadow:var(--shadow-sm);

  @media(max-width: 560px){
    padding:0.4rem 1.2rem;
    font-size: 1rem;
  }
`

export default Input