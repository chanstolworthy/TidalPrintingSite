import React from 'react'
import styled from 'styled-components'
import {colors} from "../../styles";

const AreaComponentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 36px;
    margin: auto;
`;

const Area = styled.div`
   margin-bottom: 36px;
`;

const Title = styled.div`
    color: ${colors.blue};
    font-size: 12px;
`;

const Description = styled.div`
    font-size: 12px;
    margin-top: 8px;
    padding-right: 12px;
    max-width: 90%;
`;

const SectionTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 24px;
    margin: 48px 0 36px 0;
`;

const AreasOfSuccess = () => {
    const areas = [
        {
            title: 'REAL ESTATE',
            description: 'Some really good description that explains what it is and why it is so cool'
        },
        {
            title: 'DENTAL',
            description: 'Some really good description that explains what it is and why it is so cool'
        },
        {
            title: 'AUTOMOTIVE',
            description: 'Some really good description that explains what it is and why it is so cool'
        },
        {
            title: 'LEGAL',
            description: 'Some really good description that explains what it is and why it is so cool'
        },
        {
            title: 'CHIROPRACTOR',
            description: 'Some really good description that explains what it is and why it is so cool'
        },
        {
            title: 'MEDICAL',
            description: 'Some really good description that explains what it is and why it is so cool'
        },
    ]

    return (
        <>
            <SectionTitle>Proven areas of success</SectionTitle>
        <AreaComponentWrapper>
            {
                areas.map((area, i) => (
                    <Area key={i}>
                        <Title>{area.title}</Title>
                        <Description>{area.description}</Description>
                    </Area>
                ))
            }
        </AreaComponentWrapper>
        </>
    )
}

export default AreasOfSuccess