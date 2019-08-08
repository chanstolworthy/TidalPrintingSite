import React from 'react'
import styled from 'styled-components'
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button'
import tidal_logo from '../assets/tidal_logo.png'
import {Link} from "react-router-dom";

const Logo = styled.img`
    width: 105px;
`;

const NavWrapper = styled.div`
    & > a {
    margin-right: 24px;
    text-decoration: none;
    font-size: 12px;
    color: black;
    }
`;

const Nav = styled.div`
    z-index: 100;
`;

const SiteHeader = () => {
    return (
        <Nav>
            <header>
                <Navbar expand="lg">
                    <Link to='/'>
                        <Logo src={tidal_logo} alt='logo'/>
                    </Link>
                    <NavWrapper>
                        <Link to='/how-it-works'>How it works</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/contact-us'>Contact</Link>
                        <Button>Get a Quote</Button>
                    </NavWrapper>
                </Navbar>
            </header>
        </Nav>
    )

}
export default SiteHeader