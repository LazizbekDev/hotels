import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
  height: 60px;
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 100;
  width: 100%;
  background-color: #0fa;
`;

const Logo = styled(Link)`
    color: #fff;
`;

const MenuBars = styled(FaBars)`
    display: none; 

    @media screen and (max-width: 767px) {
        display: block;
        color: #fff;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    } 
`;

const NavMenuLinks = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin: 0 10px;
`;

const NavBtn = styled.div`
    display: flex;
    align-itmes: center;
    margin-right: 24px;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">ELICR</Logo>
            <MenuBars/>
            <NavMenu>
                {
                    menuData.map((item, index) => {
                        return (
                            <NavMenuLinks to={item.link} key={index}>
                                {item.title}
                            </NavMenuLinks>
                        )
                    })
                }
            <NavBtn>
                <Button to="/contact" primary='true' >
                    contact me
                </Button>
            </NavBtn>
            </NavMenu>
        </Nav>
    )
}

export default Navbar;
