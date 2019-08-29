import React from 'react'
import styled from 'styled-components'
import tidal_logo from '../../assets/tidal_logo.png'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import google from '../../assets/google.svg'
import {colors} from "../../styles";

const Logo = styled.img`
    width: 75px;
`;

const SocialMediaLink = styled.img`
    width: 16px;
`;

const FooterWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
flex-wrap: wrap;
margin-bottom: 72px;
margin-top: 48px;
`;

const FooterLeft = styled.div`
width: 100%;
max-width: 240px;
padding: 16px;
`;

const ColumnRightLarge = styled.div`
width: 100%;
max-width: 140px;
margin-right: 72px;
`;

const FooterRight = styled.div`
display: flex;
padding: 16px;
`;

const FooterText = styled.div`
    font-size: 10px;
    color: ${colors.gray}
`;

const FooterTitle = styled.div`
    font-size: 12px;
    margin-bottom: 8px;
`;

const LinkWrapper = styled.div`
display: flex;
flex-direction: column;
& a {
text-decoration: none;
    font-size: 10px;
    color: ${colors.gray};
    margin-bottom:8px;
}
`;

const IconWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 16px;
`;

const Spacer = styled.div`
margin-top: 16px;
margin-bottom: 16px;
`;


const Footer = () => {
    return (

        <FooterWrapper>
            <FooterLeft>
                <Logo src={tidal_logo} alt='logo'/>
                <Spacer>
                    <FooterText>Some really good header</FooterText>
                </Spacer>
                <IconWrapper>
                    <SocialMediaLink src={linkedin} alt='linkedin'/>
                    <SocialMediaLink src={twitter} alt='twitter'/>
                    <SocialMediaLink src={facebook} alt='facebook'/>
                    <SocialMediaLink src={google} alt='google'/>
                </IconWrapper>
            </FooterLeft>
            <FooterRight>
                <ColumnRightLarge id='tidal-home-contact'>
                    <FooterTitle>Contact</FooterTitle>
                    <FooterText>Please reach out if you have any questions!</FooterText>
                    <Spacer>
                        <FooterText>951 834 4908</FooterText>
                    </Spacer>
                    <FooterText>contact@tidalprinting.com</FooterText>
                </ColumnRightLarge>
                <div>
                    <FooterTitle>About</FooterTitle>
                    <LinkWrapper>
                        <a href='#tidal-home-how-it-works'>How it works</a>
                        <a href='#tidal-home-services'>Services</a>
                        <a href='#tidal-home-contact'>Contact</a>
                    </LinkWrapper>
                </div>
            </FooterRight>

        </FooterWrapper>

    )
}

export default Footer