import React from 'react'
import background_left from '../../assets/background_left.png'
import background_right from '../../assets/background_right.png'
import map from '../../assets/map.png'
import track from '../../assets/track.svg'
import stacked_cards from '../../assets/stacked_cards.png'
import hero from '../../assets/hero.png'
import styled from 'styled-components'
import {Header, SubHeader} from "../../components/StyledComponents";
import HomeSection from "./HomeSection";
import {SIDE_LEFT, SIDE_RIGHT} from "../../constants";
import {colors} from "../../styles";

const backgroundBase = styled.img`
    position: absolute;
    top: 0;
    z-index: -1;
    
`;

const SectionsWrapper = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    alig-items: center;
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
`;
const HeroImage = styled.img`
    width: 100%;
    max-width: 600px;
`;
const Center = styled.div`
    display: flex;
    justify-content: center;
`;

const header = 'Direct Mailing with Results';
const subHeader = 'Customize, target and track your campaign like never before with our full service printing and mailing directly to your customer'

const steps = [
    {
        image: stacked_cards,
        header: 'Choose your size and start customizing',
        side: SIDE_LEFT,
        color: colors.blue
    },
    {
        image: map,
        header: 'Pick your audience and demographic',
        side: SIDE_RIGHT,
        color: colors.green
    },
    {
        image: track,
        header: 'Track your campaign and measure results',
        side: SIDE_LEFT,
        color: colors.purple
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
            <SectionsWrapper>
                {
                    steps.map((s, i) => (
                        <HomeSection
                            key={i}
                            step={i + 1}
                            image={s.image}
                            header={s.header}
                            color={s.color}
                            side={s.side}/>
                    ))
                }
            </SectionsWrapper>
        </>
    )
}
export default HomeView