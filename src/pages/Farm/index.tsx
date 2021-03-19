import React from 'react';
import AppBody from '../AppBody';
import Row from '../../components/Row';
import { ButtonLight, ButtonPrimary } from '../../components/Button';
import { TYPE } from '../../theme';
import styled from 'styled-components';
import CurrencyLogo from '../../components/CurrencyLogo';
import { ETHER } from '@uniswap/sdk';
import { useTranslation } from 'react-i18next';
import { useActiveWeb3React } from '../../hooks';
import { useWalletModalToggle } from '../../state/application/hooks';

const Card = styled.div`
    position: relative;
    max-width: 420px;
    width: 100%;
    border-radius: 30px;
    padding: 1.5rem;
    box-shadow: ${({ theme }) => theme.shadow2};
    background: ${({ theme }) => theme.bg1};
    margin-bottom: 1rem;
    overflow: hidden;
`;

const RowCenter = styled(Row)`
    justify-content: center;
`;

const MoneyText = styled(TYPE.black)`
    max-width: 17rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Button = styled(ButtonPrimary)`
    margin-top: 3rem;
`;

const BorderRow = styled(Row)`
    justify-content: space-between;
    padding: 0.8rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor3};
`;

const SmallMoneyText = styled(TYPE.black)`
    flex-grow: 1;
    padding-left: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
`;

export default function Farm() {
    const {t} = useTranslation();
    const toggleWalletModal = useWalletModalToggle();
    const { account } = useActiveWeb3React();
    return (
        <AppBody style={{background: 'transparent', boxShadow: 'none'}}>
            {
                !account ? (
                    <ButtonLight style={{marginTop: '4rem'}} onClick={toggleWalletModal}>{t('connectWallet')}</ButtonLight>
                ) : (
                    <>
                        <Card>
                            <RowCenter>
                                <TYPE.black fontSize={32}>{t('amountToBeRewarded')}</TYPE.black>
                            </RowCenter>
                            <RowCenter>
                                <CurrencyLogo size="2rem" currency={ETHER} />
                                <MoneyText style={{marginLeft: '1rem'}} fontSize={32}>0.00</MoneyText>
                            </RowCenter>
                            <RowCenter>
                                <Button>{t('get')}</Button>
                            </RowCenter>
                        </Card>
                        <Card>
                            <RowCenter>
                                <TYPE.black fontSize={32}>DOG LP {t('staked')}</TYPE.black>
                            </RowCenter>
                            <RowCenter>
                                <TYPE.black fontSize={24} fontWeight={300}>DOG/USDT</TYPE.black>
                            </RowCenter>
                            <RowCenter>
                                <MoneyText style={{marginLeft: '1rem'}} fontSize={32}>0.00</MoneyText>
                            </RowCenter>
                            <RowCenter>
                                <Button>{t('approve')}</Button>
                            </RowCenter>
                        </Card>
                        <Card>
                            <BorderRow>
                                <TYPE.black fontSize={20} fontWeight={300}>{t('liquidity')}</TYPE.black>
                                <SmallMoneyText fontSize={20}>$635,429,142</SmallMoneyText>
                            </BorderRow>
                            <BorderRow>
                                <TYPE.black fontSize={20} fontWeight={300}>{t('amountOfStakedFunds')}</TYPE.black>
                                <SmallMoneyText fontSize={20}>$635,429,142</SmallMoneyText>
                            </BorderRow>
                            <BorderRow style={{border: 'none'}}>
                                <TYPE.black fontSize={20} fontWeight={300}>{t('amountsOfStakedAddress')}</TYPE.black>
                                <SmallMoneyText fontSize={20}>$635,429,142</SmallMoneyText>
                            </BorderRow>
                        </Card>
                    </>
                )
            }
            
        </AppBody>
    )
}