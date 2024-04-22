import React, {useState} from 'react';
import styled from "styled-components";
import {useBurger} from "../context/BurgerContext.jsx";


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
  }

  &::after {
    bottom: -8px; 
  }
`;


function Burger() {
    const {toggleBurger} = useBurger();
    return (
        <StyledBurgerContainer onClick={toggleBurger}>
          <StyledBurger />
        </StyledBurgerContainer>

    );
}

export default Burger;