import styled, {css} from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 100px;
  padding: 0.4rem 1.2rem;

  color: ${({type}) => `var(--color-${type}-700)`};
  background-color: ${({type}) => `var(--color-${type}-100)`};

  ${(props) =>
          props.size === "big" &&
          css`
            @media (max-width: 425px) {
              font-size: 0.8rem;
              padding: 0.4rem 0.8rem;
            }
          `}

  ${(props) =>
          props.size === "medium" &&
          css`
            padding: 0.5rem 1.2rem;
            @media (max-width: 986px) {
              font-weight: 500;
              font-size: 1rem;
              padding: 0.4rem 1rem;
            }
            @media (max-width: 560px) {
              font-weight: 500;
              font-size: 0.8rem;
              padding: 0.3rem 0.8rem;
            }
          `}

  ${(props) =>
          props.size === "small" &&
          css`
            @media (max-width: 986px) {
              font-size: 0.8rem;
              padding: 0.4rem 0.6rem;
            }

            @media (max-width: 425px) {
              font-size: 0.6rem;
              padding: 0.4rem;
              font-weight: 400;
            }
          `}
`;

Tag.defaultProps = {
    size: "small",
};

export default Tag;
