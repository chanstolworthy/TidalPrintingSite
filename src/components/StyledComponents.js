import styled from 'styled-components';
import {colors} from "../styles";

export const Header = styled.div`
    font-size: 24px;
`;

export const SubHeader = styled.div`
    font-size: 16px;
`;

export const Text = styled.div`
    font-size: 12px;
`;

export const TagBase = styled.div`
   border-radius: 8px;
   background: gray;
`;

export const NumberTag = styled(TagBase)`
    height: 36px; 
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: ${({color})=>color};
`;

export const FlexBase = styled.div`
    display: flex;
`;
export const FlexCenterRow = styled(FlexBase)`
    display: flex;
    align-items: center;
`;
export const FlexCenterRowBetween = styled(FlexCenterRow)`
    width: 100%;
    justify-content: space-between;
`;

export const Button = styled.button`
  height: 36px;
  border: 1px solid ${colors.blue};;
  border-radius: 6px;
  min-width: 120px;
  outline: none;
  background: ${colors.blue};
  color: white;
  cursor: pointer;
  font-size: 16px;
`;

export const ButtonSecondary = styled(Button)`
  background: ${colors.lightestBlue};
  color: ${colors.blue};
`;