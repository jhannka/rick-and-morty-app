
import React from 'react';
import logoImg from '../../img/logo-white.fab45c5f.svg';
import { NavbarContainer, NavbarWrapper, LogoContainer, Logo } from './Navbar.elements';

const Navbar = () => {
  return (
    <>
        <NavbarContainer>
            <NavbarWrapper>
                <LogoContainer>
                  <Logo src={logoImg}/>
                </LogoContainer>
            </NavbarWrapper>
        </NavbarContainer>
    </>
  )
}

export default Navbar