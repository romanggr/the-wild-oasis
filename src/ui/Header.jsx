import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo.jsx";
import {useIsMobile} from "../hooks/useIsMobile.js";
import Burger from "./Burger.jsx";


const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  height: 6rem;

  @media(max-width: 768px){
    gap: 2.4rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem 0.5rem;
  }
  
  @media(max-width: 450px){
    gap: 1rem;
    padding: 1rem 1rem 0.5rem;

  }
`;


const ToolBar = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;

  @media(max-width: 450px){
    gap: 1rem;
  }
`


function Header() {
    const {isMobile} = useIsMobile();
    return (
        <StyledHeader>
            {isMobile ?
                <>
                   <Burger />
                    <ToolBar>
                        <UserAvatar />
                        <HeaderMenu />
                    </ToolBar>
                </>
                :
            <>
                <UserAvatar />
                <HeaderMenu />
            </>
            }


        </StyledHeader>
    );
}

export default Header;