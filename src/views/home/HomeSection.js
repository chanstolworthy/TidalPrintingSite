import React from 'react'
import styled from 'styled-components';
import {SIDE_LEFT} from "../../constants";
import {Header, NumberTag, SubHeader, Text} from '../../components/StyledComponents'




const SectionBase = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction:${({side}) => side === SIDE_LEFT ? 'row' : 'row-reverse'};
    margin: auto;
    width: 100%;
    max-width: 900px;
    flex-wrap: wrap-reverse;
    box-sizing: border-box;
`;

const SectionImage = styled.img`
    width: 100%;
    max-width: 400px;
`;

const HomeSection = (props) => {
    const {side, header, image, subOne, textOne, subTwo, textTwo, step, color} = props;

    return (
            <SectionBase style={{padding: '24px'}} side={side}>
                <SectionImage style={{marginTop: '54px'}} src={image}/>
                <div>
                    <NumberTag style={{marginBottom: '24px'}} color={color}>{step}</NumberTag>
                    <Header>{header}</Header>
                    <SubHeader style={{color: color, margin: '16px 0'}}>{subOne}</SubHeader>
                    <Text style={{maxWidth: '400px'}}>{textOne}</Text>
                    <SubHeader style={{color: color, margin: '16px 0'}}>{subTwo}</SubHeader>
                    <Text style={{maxWidth: '400px'}}>{textTwo}</Text>
                </div>
            </SectionBase>
    )
}
export default HomeSection