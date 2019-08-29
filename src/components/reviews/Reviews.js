import React from 'react'
import styled from 'styled-components';
import {colors} from "../../styles";

const SectionTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 24px;
    margin: 48px 0 36px 0;
`;

const CardName = styled.div`
    margin: 12px 0 4px 0;
    font-weight: 400;
`;

const CardTitle = styled.div`
    color: ${colors.blue};
    font-size: 12px;
`;

const CardReview = styled.div`
    color: ${colors.gray};
    font-size: 10px;
`;

const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Card = styled.div`
box-shadow: -1px 0px 21px 0px rgba(176,176,176,0.5);
width: 100%;
max-width: 400px;
margin: 16px;
border-radius: 6px;
padding: 36px;
box-sizing: border-box;
`

const cards = [
    {
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        name: 'Cardon Smith',
        title: 'PERSONAL INJURY ATTORNEY'
    },
    {
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        name: 'Brian Connors',
        title: 'DIRECTOR OF ADVERTISING HOSPITAL'
    },

]
const Reviews = () => {
    return (
        <>
            <SectionTitle>What they are saying</SectionTitle>
            <CardsWrapper>
            {
                cards.map((c, i)=>(
                    <Card key={i}>
                        <CardReview>{c.review}</CardReview>
                        <CardName>{c.name}</CardName>
                        <CardTitle>{c.title}</CardTitle>
                    </Card>
                ))
            }
            </CardsWrapper>
        </>
    )
};

export default Reviews