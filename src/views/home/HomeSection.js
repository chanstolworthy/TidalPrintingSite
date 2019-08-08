import React from 'react'
import styled from 'styled-components';
import {SIDE_LEFT} from "../../constants";
import {Header} from '../../components/StyledComponents'




const SectionBase = styled.div`
    display: flex;
    flex-direction:${({side}) => side === SIDE_LEFT ? 'row' : 'row-reverse'};
    margin: auto;
`;

const SectionImage = styled.img`
    width: 100%;
    max-width: 400px;
`;

const HomeSection = (props) => {
    const {side, header, image, subOne, textOne, subTwo, textTwo, step, color} = props;

    return (
            <SectionBase side={side}>
                <SectionImage src={image}/>
                <div>
                    <Header>{header}</Header>
                </div>
            </SectionBase>
    )
}
export default HomeSection