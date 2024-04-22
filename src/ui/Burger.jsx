import React, { useState } from 'react';
import styled, { css, keyframes } from "styled-components";
import { useBurger } from "../context/BurgerContext.jsx";

const crossAnimation = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(45deg); }
  100% { transform: rotate(45deg); }
`;

const StyledBurgerContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
`;

const StyledBurger = styled.div`
  width: 100%;
  height: 3px;
  background: var(--color-brand-600);
  position: relative;
  transition: background-color 0.3s ease;

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 3px;
    background: var(--color-brand-600);
    position: absolute;
  }

  &::before {
    top: -8px;
    transition: top 0.3s ease, transform 0.3s ease;
  }

  &::after {
    bottom: -8px;
    transition: bottom 0.3s ease, transform 0.3s ease;
  }
  
  ${({ isactive }) => isactive === "true" && css`
    background: transparent;
    
    &::before {
      top: 0;
      transform: rotate(90deg);
    }
    &::after {
      bottom: 0;
      transform: rotate(-180deg);
    }
    animation: ${crossAnimation} 0.3s forwards;
  `}
`;

function Burger() {
    const { toggleBurger, isBurger } = useBurger();


    return (
        <StyledBurgerContainer onClick={toggleBurger}>
            <StyledBurger isactive={isBurger? "true" : "false"} />
        </StyledBurgerContainer>
    );
}

export default Burger;
