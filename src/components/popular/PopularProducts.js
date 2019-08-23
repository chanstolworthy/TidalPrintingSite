import React, {useState} from 'react'
import styled from 'styled-components'
import {colors} from "../../styles";
import {Button, ButtonSecondary} from "../StyledComponents";

const SelectionCard = styled.div`
border: 1px solid ${({active}) => active ? colors.lightBlue : 'white'};
padding: 12px;
border-radius: 6px;
display: flex;
flex-direction: column;
align-items: center;
margin: 2px 12px;
`
const PopularWrapper = styled.div`
display: flex;
margin-top: 36px;
width: 100%;
justify-content: center;
max-width: 900px;
`
const ProductHeader = styled.div`
font-size: 12px;
`

const Option = styled.div`
font-size: 12px;
display: flex;
justify-content: center;
width: 100%;
margin-bottom: 8px;
`

const Price = styled.div`
font-size: 24px;
margin: 16px 0;
`

const PopularHeader = styled.div`
height: 16px;
color: ${colors.lightBlue}
font-size: 12px;
display: flex;
justify-content: center;
width: 100%;
`

const PopularProducts = (props) => {
    const POSTCARD = "POSTCARD";
    const DOOR_HANGER = "DOOR_HANGER";
    const NEWSLETTER = "NEWSLETTER";
    const MAGAZINE = "MAGAZINE";
const optionsList = ['EDDM', 'Demographics', 'Mailing Lists', 'Design Support']

    const [product, setProduct] = useState(POSTCARD)

    const handleSetProduct = (type) => () => {
        setProduct(type)
    };

    const productList = [
        {
            productType: DOOR_HANGER,
            title: 'DOOR HANGER',
            options: optionsList,
            price: "¢ .10",
            popular: false
        },
        {
            productType: POSTCARD,
            title: POSTCARD,
            options: optionsList,
            price: "¢ .20",
            popular: true
        },
        {
            productType: NEWSLETTER,
            title: 'NEWSLETTER',
            options: optionsList,
            price: "¢ .30",
            popular: false
        },
        {
            productType: MAGAZINE,
            title: MAGAZINE,
            options: optionsList,
            price: "¢ .90",
            popular: false
        }
    ]

    const renderSection = ({productType, title, options, popular, price}) => (
        <div key={productType}>
            <PopularHeader>
                {
                    popular && (
                        'Most popular!'
                    )
                }
            </PopularHeader>
            <SelectionCard active={product === productType}>
                <ProductHeader>{title}</ProductHeader>
                <Price>{price}</Price>
                <div>{options.map((option, index)=> <Option key={index}>{option}</Option>)}</div>
                {product === productType ? (
                    <Button onClick={handleSetProduct(productType)}>Get Started</Button>
                ): (
                    <ButtonSecondary onClick={handleSetProduct(productType)}>Get Started</ButtonSecondary>
                )}

            </SelectionCard>
        </div>
    );

    return (
        <PopularWrapper>
            {
                productList.map((productItem) => (
                    renderSection(productItem)
                ))
            }
        </PopularWrapper>
    )
}
export default PopularProducts