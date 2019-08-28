import React from 'react'
import background_left from '../../assets/background_left.png'
import background_right from '../../assets/background_right.png'
import map from '../../assets/map.png'
import track from '../../assets/track.svg'
import stacked_cards from '../../assets/stacked_cards.png'
import hero from '../../assets/hero.png'
import styled from 'styled-components'
import {Header, SubHeader, FlexCenterRowBetween, Button} from "../../components/StyledComponents";
import HomeSection from "./HomeSection";
import {SIDE_LEFT, SIDE_RIGHT} from "../../constants";
import {colors} from "../../styles";
import {Link} from "react-router-dom";
import PopularProducts from "../../components/popular/PopularProducts";
import AreasOfSuccess from "../../components/areasOfSuccess/AreasOfSuccess";
import Reviews from "../../components/reviews/Reviews";

const backgroundBase = styled.img`
    position: absolute;
    top: 0;
    z-index: -1;
`;

const SectionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BackgroundRight = styled(backgroundBase)`
    right: 0;
    width: 100%;
    max-width: 768px;
`;

const BackgroundLeft = styled(backgroundBase)`
    left: 0;
    width: 100%;
    max-width: 325px;
`;

const HeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 700px;
    margin: auto;
    text-align: center;
    padding: 0 36px;
`;
const HeroImage = styled.img`
    width: 100%;
    max-width: 600px;
`;
const Center = styled.div`
    display: flex;
    justify-content: center;
`;

const QuoteLink = styled.div`
margin: 24px;
`;

const header = 'Direct Mailing with Results';
const subHeader = 'Customize, target and track your campaign like never before with our full service printing and mailing directly to your customer'

const steps = [
    {
        image: stacked_cards,
        header: 'Choose your size and start customizing',
        side: SIDE_LEFT,
        color: colors.blue,
        subOne: 'ALL SIZES',
        textOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        subTwo: 'CUSTOMIZE + DESIGN',
        textTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
    },
    {
        image: map,
        header: 'Pick your audience and demographic',
        side: SIDE_RIGHT,
        color: colors.green,
        subOne: 'DEMOGRAPHIC',
        textOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        subTwo: 'MAILING LIST',
        textTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
    },
    {
        image: track,
        header: 'Track your campaign and measure results',
        side: SIDE_LEFT,
        color: colors.purple,
        subOne: 'TRACKING',
        textOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        subTwo: 'CONVERSION RATES',
        textTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
    },
]

const HomeView = () => {
    return (
        <>
            <BackgroundLeft src={background_left} alt='background left'/>
            <BackgroundRight src={background_right} alt='background right'/>
            <HeaderTextWrapper>
                <Header style={{marginBottom: '24px', marginTop: '32px'}}>{header}</Header>
                <SubHeader>{subHeader}</SubHeader>
            </HeaderTextWrapper>
            <Center>
                <HeroImage src={hero} alt='hero'/>
            </Center>
            <SectionsWrapper id='tidal-home-how-it-works'>
                {
                    steps.map((s, i) => (
                        <HomeSection
                            key={i}
                            subOne={s.subOne}
                            textOne={s.textOne}
                            subTwo={s.subTwo}
                            textTwo={s.textTwo}
                            step={i + 1}
                            image={s.image}
                            header={s.header}
                            color={s.color}
                            side={s.side}/>
                    ))
                }
                <FlexCenterRowBetween style={{maxWidth: '900px', margin: '36px 0'}}>
                    <Header>Want bug results on your next campaign?</Header>
                    <Link to='/quote'>
                        <Button>Get a Quote</Button>
                    </Link>
                </FlexCenterRowBetween>

                <Header id='tidal-home-services'>Popular products starting at</Header>
                <PopularProducts/>
                <QuoteLink>Don't see the size you are looking for? Get a custom quote.</QuoteLink>
                <AreasOfSuccess/>
                <Reviews/>
                <Header id='tidal-home-contact'>Contact</Header>
            </SectionsWrapper>
        </>
    )
}
export default HomeView