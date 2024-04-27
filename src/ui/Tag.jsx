import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);

  @media(max-width: 986px){
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
    
  }

  @media(max-width: 425px){
    font-size: 0.6rem;
    padding: 0.4rem;
    font-weight: 400;

  }
`;

export default Tag;
