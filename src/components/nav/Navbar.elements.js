import styled from "styled-components";

export const NavbarContainer = styled.nav`
height: 66px;
position: fixed;
top: 0px;
right: 0px;
left: 0px;
display: flex;
z-index: 200;
background-color: rgb(31, 38, 45);
`;

export const NavbarWrapper = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: space-between;
padding: 0px 60px;
background-position-y: 0px;
width: 100%;
`;

export const LogoContainer = styled.div`
width: 120px;
height: 37px;
`;

export const Logo = styled.img`
  height: 100%;
`;