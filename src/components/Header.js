import React from 'react'
import { NavLink } from 'react-router-dom'
import  Navbar  from './Navbar'
import styled from 'styled-components'

function Header() {
  return (
    <>
      <MainHeader>
        <NavLink to=''>
            <img src='./images/logo.jpg' alt="" className='logo'/>
        </NavLink>
        <Navbar/>
      </MainHeader>
      
    </>
  )
}

const MainHeader = styled.header`
 padding: 0 48px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }`;

export default Header