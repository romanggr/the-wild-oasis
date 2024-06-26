
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import styled from 'styled-components'


const StyledAppLayout = styled.div`
    display:grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows:auto 1fr;
    height:100vh;

    @media(max-width: 968px){
      grid-template-columns: 21rem 1fr;
    }
  
    @media(max-width: 768px){
        grid-template-columns: 1fr;
    }
`

const Main = styled.main`
    background: var(--color-grey-50);
    padding:4rem 4.8rem 6.4rem;

  @media(max-width: 560px){
    padding:4rem 2.4rem 6.4rem;
  }
`

const Container = styled.div`
    max-width:120rem;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    gap:3.2rem;
`

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <Header />
            <SideBar />
            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>
        </StyledAppLayout>
    )
}

export default AppLayout