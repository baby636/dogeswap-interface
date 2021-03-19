import React from 'react';
import { ChevronRight } from 'react-feather';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { Collapse } from 'antd';
import AppBody from '../AppBody';
import styled from 'styled-components';
import Row, {RowBetween} from '../../components/Row';
import { TYPE } from '../../theme';
import CurrencyLogo from '../../components/CurrencyLogo';
import DoubleLogo from '../../components/DoubleLogo';
import { ETHER } from '@uniswap/sdk';
import { Search } from 'react-feather';
import { NavLink } from 'react-router-dom';
import RightItems from './right-item';
import FireImg from '../../assets/images/fire.png';

const ListWrapper = styled(Collapse)`
    background: ${({ theme }) => theme.bg1};
    border-radius: 1rem;
    overflow: hidden;
    border: none;

    .ant-collapse-header {
        outline: none;
    }
    
`;

const ItemContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 1rem 0;
    padding-right: 1rem;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor3};
`;

const HeaderRow = styled(Row)`
    height: 1.5rem;
    box-sizing: border-box;
    width: 100%;
    padding: 0 1rem;
    justify-content: space-between;
`;

const OrangeText = styled(TYPE.orange)`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
`;

const SearchWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SearchButton = styled(NavLink)`
    padding: 0.5rem 2rem;
    /* height: 2.4rem; */
    font-size: 1rem;
    border-radius: 1.2rem;
    text-align:center;
    width: 30%;
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.primary9};
    color: ${({ theme }) => theme.primary9};

    &:focus {
        border: 1px solid ${({ theme }) => theme.primary10};
        color: ${({ theme }) => theme.primary10};
    }
    &:hover {
        border: 1px solid ${({ theme }) => theme.primary10};
        color: ${({ theme }) => theme.primary10};
    }
    &.active {
        border: 1px solid ${({ theme }) => theme.primary10};
        color: ${({ theme }) => theme.primary10};
    }
    &:disabled {
        opacity: 50%;
        cursor: auto;
    }
`;

const SearchInputWrapper = styled.div`
    position: relative;
    width: 30%;
    color: ${({ theme }) => theme.primary9};
`;

const SearchInput = styled.input`
  position: relative;
  display: flex;
  padding: 16px;
  padding: 0.5rem 1rem;
  padding-right: 2.5rem;
  align-items: center;
  width: 100%;
  height: 2.4rem;
  white-space: nowrap;
  background: none;
  border: none;
  outline: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.text1};
  border-style: solid;
  border: 1px solid ${({ theme }) => theme.primary9};
  -webkit-appearance: none;

  font-size: 18px;

  ::placeholder {
    color: ${({ theme }) => theme.primary9};
  }
`;

const SearchIcon = styled(Search)`
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
`;

const Address = styled.div`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primary7};
    height: 2rem;
    border-radius: 1rem;
    margin-left: 0.5rem;
    padding: 0.3rem;
`;

const RightArrow = styled(ChevronRight)`
    position: absolute;
    right: 1%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: ${({ theme }) => theme.text1};
`; 

const SingleCurrency = () => {
    return (
        <ItemContainer>
            <RightArrow />
            <HeaderRow>
                <RowBetween style={{width: '20%'}}>
                    <CurrencyLogo currency={ETHER} />
                </RowBetween>
                <RowBetween style={{width: '40%'}}>
                    <TextLabel >TVL:</TextLabel>
                    <TextValue>6125.0489</TextValue>
                </RowBetween>
                <RowBetween style={{width: '20%'}} />
            </HeaderRow>
            <HeaderRow style={{marginTop: '0.6rem'}}>
                <RowBetween style={{width: '20%'}}>
                    <OrangeText>DOG</OrangeText>
                </RowBetween>
                <RowBetween style={{width: '40%'}}>
                    <TextLabel>APY:</TextLabel>
                    <TextValue>121.29%</TextValue>
                </RowBetween>
                <RowBetween style={{width: '20%'}}>
                    <Address>1231231</Address>
                </RowBetween>
            </HeaderRow>
        </ItemContainer>
    )
}

const RightFlag = styled.div`
    position: absolute;
    right: 0;
    top: 0.5rem;
    padding: 0.1rem 0.3rem;
    font-size: 0.5rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primary7};
`;

const TextLabel = styled(TYPE.orange)`
    flex-shrink: 0;
    padding-right: 0.5rem;
`;

const TextValue = styled(TYPE.black)`
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
`;

const Fire = styled.div`
    position: absolute;
    right: 0.5rem;
    top: 0.4rem;
    width: 1.8rem;
    height: 1.8rem;
    font-size: 0.4rem;
    padding-top: 0.6rem;
    text-align: center;
    background: url(${FireImg}) no-repeat;
    background-position: center center;
    background-size: contain;
    color: ${({ theme }) => theme.white};
`;
const FireFlag = styled.div`
    position: absolute;
    right: 0;
    top: 0.1rem;
    width: 1rem;
    height: 1rem;
    font-size: 0.4rem;
    text-align: center;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.red1};
    color: ${({ theme }) => theme.white};
`;

const LP = () => {
    const hideSomething = true;
    return (
        <ItemContainer>
            {!hideSomething && <RightFlag>3x</RightFlag>}
            <Fire>1X</Fire>
            <FireFlag>3</FireFlag>
            <RightArrow />
            <HeaderRow>
                <RowBetween style={{width: '30%'}}>
                    <DoubleLogo size={24} currency0={ETHER} currency1={ETHER} />
                </RowBetween>
                <RowBetween style={{width: '50%'}}>
                    <TextLabel >TVL:</TextLabel>
                    <TextValue>6125.0489</TextValue>
                </RowBetween>
            </HeaderRow>
            <HeaderRow style={{marginTop: '0.6rem'}}>
                <RowBetween style={{width: '30%'}}>
                    <OrangeText>DOG-USDT LP</OrangeText>
                </RowBetween>
                <RowBetween style={{width: '50%'}}>
                    <TextLabel>APY:</TextLabel>
                    <TextValue>121.29%</TextValue>
                </RowBetween>
            </HeaderRow>
        </ItemContainer>
    )
}

export default function MiningTable() {
    const { t } = useTranslation();
    const { type } = useParams<{
        type: string;
    }>();
    
    const isLp = type !== 'single';
    return (
        <AppBody style={{ marginTop: '2rem', background: 'transparent', boxShadow: 'none'}}>
            <RightItems />
            <SearchWrapper>
                <SearchButton className={isLp ? 'active' : ''} to={'/mining-table/lp'}>{t('lpTab')}</SearchButton>
                <SearchButton className={!isLp ? 'active' : ''} to={'/mining-table/single'}>{t('singleCurrency')}</SearchButton>
                <SearchInputWrapper>
                    <SearchInput placeholder={t('search')} />
                    <SearchIcon />
                </SearchInputWrapper>
            </SearchWrapper>
            <ListWrapper>
                <SingleCurrency />
                <LP />
            </ListWrapper>
        </AppBody>   
    );
}