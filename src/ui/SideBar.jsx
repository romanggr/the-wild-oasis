import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import {useIsMobile} from "../hooks/useIsMobile.js";
import {useBurger} from "../context/BurgerContext.jsx";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  

  @media(max-width: 768px){
    position: absolute;
    height: calc(100vh - 8rem);
    margin-top: 7.9rem;
  }
`;

function Sidebar() {
    const {isBurger} = useBurger();
    const {isMobile} = useIsMobile();

    return (
        (!isMobile || (isMobile && isBurger)) ? (
            <StyledSidebar>
                {isMobile ? null : <Logo/>}
                <MainNav/>
                 {/*<Uploader />*/}
            </StyledSidebar>
        ) : null
    );
}

export default Sidebar;
