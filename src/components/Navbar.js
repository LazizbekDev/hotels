import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import './Nav.css';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 100;
  width: 100%;
  position: fixed;
  transition: .3s ease-in-out;
`;

const Logo = styled(Link)`
    color: #fff;
    position: relative;
    z-index: 9999999;
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
    position: relative;
    z-index: 55;

    @media screen and (max-width: 768px) {
        display: none;
    } 
`;

const NavMenuLinks = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin: 0 10px;
    position: relative;
    z-index: 55;
`;

const NavBtn = styled.div`
    display: flex;
    align-itmes: center;
    margin-right: 24px;
    position: relative;
    z-index: 55;
    @media screen and (max-width: 768px) {
        display: none;
    } 
`;

const Navbar = ({toggle}) => {
    const [scrollOn, setScrollOn] = useState(false)

    const scroller = () => {
        // console.log(window.scrollY);
        if(window.scrollY >= 20) {
            setScrollOn(true)
        } else {
            setScrollOn(false)
        }
    }

    window.addEventListener('scroll', scroller)

    return (
        <Nav className={scrollOn ? 'navOn' : 'nav'}>
            <Logo to="/">ELICR</Logo>
            <MenuBars onClick={toggle}/>
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
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary='true' >
                    contact me
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar;
