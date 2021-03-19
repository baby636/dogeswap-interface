import React, { useContext } from 'react';
import AppBody from '../AppBody';
import { useTranslation } from 'react-i18next'
import styled, { ThemeContext }  from 'styled-components';
import BoardPriceImg from '../../assets/images/price.png';
import BoardWalletImg from '../../assets/images/wallet.png';
import BoardMoneyImg from '../../assets/images/money.png';
import BoardPanelImg from '../../assets/images/panel.png';
import BoardChartsImg from '../../assets/images/charts.png';
import DogsBackground from '../../assets/images/dog.png';
import CycleImg from '../../assets/images/cycle.png';
import RewardsImg from '../../assets/images/rewards.png';
import SlowMistImg from '../../assets/images/slow-mist.png';
import ChatImg from '../../assets/images/chat.png';
import { useDarkModeManager } from '../../state/user/hooks';
import { TYPE } from '../../theme';
import { AutoColumn } from '../../components/Column';
import Row, { RowBetween } from '../../components/Row'


const Card = styled.div`
    position: relative;
    max-width: 420px;
    width: 100%;
    border-radius: 30px;
    padding: 1rem;
    padding-top: 0rem;
`;

const BoardRoomWrapper = styled(Card)`
    background: ${({theme}) => theme.bg8};
`;

const CardTitle = styled.div`
    padding: 1rem 0;
    line-height: 1.5rem;
    color: ${({theme}) => theme.white};
    font-size: 1rem;
`;

const BoardRoomItemWapper = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    margin-top: 0.7rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    padding: 0.3rem 0.7rem;
    background: ${({theme}) => theme.white};
    color: ${({theme}) => theme.black};
`;

const BoardItemImage = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.5rem;
`;

const NormalText = styled.span`
    font-size: 1rem;
    color: ${({theme}) => theme.black};
`;

const BoardNumber = styled.span`
    flex-grow: 1;
    text-align: right;
    margin-left: 0.5rem;
    color: ${({theme}) => theme.primary7};
`;

const BoardRoomButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.2rem;
	border-radius: 1.6rem;
    font-size: 1.3rem;
    margin-top: 1rem;
    background: ${({theme}) => theme.bg12};
    color: ${({theme}) => theme.white};
`;

const TableWrapper = styled(Card)`
    width: 100%;
    margin-top: 0.6rem;
    background: ${({theme}) => theme.bg8};
    padding-bottom: 0;
`;

const BoradTalbeTitle = styled(CardTitle)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TableBody = styled.div`
    width: calc(100% + 2rem);
    margin-left: -1rem;
    padding: 0 1rem;
    background: ${({theme}) => theme.white};
    border-radius: 0 0 30px 30px;
`;

const TableRow = styled.div`
    box-sizing: border-box;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    border-top: 1px solid ${({theme}) => theme.borderColor3};
    text-align: ${props => props.style?.textAlign || 'left'};
`;

const TableColumn = styled.div`
    width: 33%;
    color: ${({theme}) => theme.black};
    font-weight: ${props => props.style?.fontWeight || 'normal'};
`;

const SummaryCardWrapper = styled(Card)`
    position: relative;
    width: 100%;
    height: 8.8rem;
    padding: 1.6rem 0.8rem;
    border-radius: 30px;
    margin-top: 0.6rem;
    z-index: 0;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.bg8};
    overflow: hidden;
`;

const SummaryCardImg = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: url(${DogsBackground});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 105% 105%;
    z-index: -1;
`;

const FeeWrapper = styled(Card)`
    box-shadow: ${({ theme }) => theme.shadow2};
    background-color: ${({ theme }) => theme.bg1};
    padding: 0 1rem;
    margin-top: 0.6rem;
`;

const FeeRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor3};
`;

const UseCaseWrapper = styled(Card)`
    margin-top: 0.6rem;
    box-shadow: ${({ theme }) => theme.shadow2};
    background-color: ${({ theme }) => theme.bg1};
    text-align: center;
    padding: 2.5rem 1rem;
`;

const UseCaseImage = styled.img`
    margin-top: 2rem;
    width: 60px;
    height: 60px;
`;

const RowCenter = styled(Row)`
    justify-content: center;
`;

export default function Mining() {
    const theme = useContext(ThemeContext);
    const [darkMode] = useDarkModeManager();
    const { t } = useTranslation();
    const hideSomething = true;

    return (
        <AppBody style={{background: 'transparent', boxShadow: 'none'}}>
            <BoardRoomWrapper>
                <CardTitle>{t('lpProperty')}(USDT)<br/>2,464,416,454.45</CardTitle>
                <BoardRoomItemWapper>
                    <BoardItemImage src={BoardPriceImg} />
                    <NormalText>{t('currentPrice')}</NormalText>
                    <BoardNumber>$8.88</BoardNumber>
                </BoardRoomItemWapper>
                <BoardRoomItemWapper>
                    <BoardItemImage src={BoardWalletImg} />
                    <NormalText>{t('dogBalance')}</NormalText>
                    <BoardNumber>$8.88</BoardNumber>
                </BoardRoomItemWapper>
                <BoardRoomItemWapper>
                    <BoardItemImage src={BoardMoneyImg} />
                    <NormalText>{t('amountToBeRewarded')}</NormalText>
                    <BoardNumber>$8.88</BoardNumber>
                </BoardRoomItemWapper>
                <BoardRoomItemWapper>
                    <BoardItemImage src={BoardPanelImg} />
                    <NormalText>{t('totalRepurchaseDestruction')}</NormalText>
                    <BoardNumber>$8.88</BoardNumber>
                </BoardRoomItemWapper>
                <BoardRoomItemWapper>
                    <BoardItemImage src={BoardChartsImg} />
                    <NormalText>{t('realTimeDeflationRate')}</NormalText>
                    <BoardNumber>$8.88</BoardNumber>
                </BoardRoomItemWapper>
                {
                    !hideSomething && (
                        <BoardRoomButton>{t('boardRoom')}</BoardRoomButton>
                    )
                }
                 </BoardRoomWrapper>
            <TableWrapper>
                <BoradTalbeTitle><span>{t('boardRoom')}</span><span>{t('more')} &gt;</span></BoradTalbeTitle>
                <TableBody>
                    <TableRow style={{border: 'none'}}>
                        <TableColumn style={{fontWeight: 'bold'}}>{t('staked')}</TableColumn>
                        <TableColumn style={{fontWeight: 'bold', textAlign:'center'}}>{t('earned')}</TableColumn>
                        <TableColumn style={{fontWeight: 'bold', textAlign:'right'}}>APY</TableColumn>
                    </TableRow>
                    <TableRow>
                        <TableColumn>FILDA/HUSD</TableColumn>
                        <TableColumn style={{textAlign: 'center'}}>DOG</TableColumn>
                        <TableColumn style={{textAlign: 'right'}}>100%</TableColumn>                    </TableRow>
                    <TableRow>
                        <TableColumn>FILDA/HUSD</TableColumn>
                        <TableColumn style={{textAlign: 'center'}}>DOG</TableColumn>
                        <TableColumn style={{textAlign: 'right'}}>100%</TableColumn>                    </TableRow>
                    <TableRow>
                        <TableColumn>FILDA/HUSD</TableColumn>
                        <TableColumn style={{textAlign: 'center'}}>DOG</TableColumn>
                        <TableColumn style={{textAlign: 'right'}}>100%</TableColumn>                    </TableRow>
                    <TableRow>
                        <TableColumn>FILDA/HUSD</TableColumn>
                        <TableColumn style={{textAlign: 'center'}}>DOG</TableColumn>
                        <TableColumn style={{textAlign: 'right'}}>100%</TableColumn>
                    </TableRow>
                </TableBody>
            </TableWrapper>
            <TableWrapper style={{background: theme.black}}>
                <BoradTalbeTitle><span>{t('lpmining')}</span><span>{t('more')} &gt;</span></BoradTalbeTitle>
                <TableBody>
                    <TableRow style={{border: 'none'}}>
                        <TableColumn style={{fontWeight: 'bold'}}>{t('staked')}</TableColumn>
                        <TableColumn style={{fontWeight: 'bold', textAlign:'center'}}>{t('earned')}</TableColumn>
                        <TableColumn style={{fontWeight: 'bold', textAlign:'right'}}>APY</TableColumn>
                    </TableRow>
                    <TableRow>
                        <TableColumn>FILDA/HUSD</TableColumn>
                        <TableColumn style={{textAlign: 'center'}}>DOG</TableColumn>
                        <TableColumn style={{textAlign: 'right'}}>100%</TableColumn>                    </TableRow>
                    <TableRow>
                        <TableColumn>FILDA/HUSD</TableColumn>
                        <TableColumn style={{textAlign: 'center'}}>DOG</TableColumn>
                        <TableColumn style={{textAlign: 'right'}}>100%</TableColumn>                    </TableRow>
                    <TableRow>
                        <TableColumn>FILDA/HUSD</TableColumn>
                        <TableColumn style={{textAlign: 'center'}}>DOG</TableColumn>
                        <TableColumn style={{textAlign: 'right'}}>100%</TableColumn>                    </TableRow>
                    <TableRow>
                        <TableColumn>FILDA/HUSD</TableColumn>
                        <TableColumn style={{textAlign: 'center'}}>DOG</TableColumn>
                        <TableColumn style={{textAlign: 'right'}}>100%</TableColumn>
                    </TableRow>
                </TableBody>
            </TableWrapper>
            <SummaryCardWrapper>
                {!darkMode && (<SummaryCardImg />)}
                <AutoColumn gap="md">
                    <RowBetween>
                        <TYPE.white fontSize={18}>{t('currentOutput')}（$）</TYPE.white>
                    </RowBetween>
                    <RowBetween>
                        <TYPE.white fontSize={32}>185,398,588.58</TYPE.white>
                    </RowBetween>
                </AutoColumn>
            </SummaryCardWrapper>
            <SummaryCardWrapper>
                {!darkMode && (<SummaryCardImg />)}
                <AutoColumn gap="md">
                    <RowBetween>
                        <TYPE.white fontSize={18}>{t('cuarrentMarketOutput')}（$）</TYPE.white>
                    </RowBetween>
                    <RowBetween>
                        <TYPE.white fontSize={32}>185,398,588.58</TYPE.white>
                    </RowBetween>
                </AutoColumn>
            </SummaryCardWrapper>
            <FeeWrapper>
                <FeeRow><TYPE.lightGray fontSize={16}>{t('24hoursTrans')}</TYPE.lightGray><TYPE.black fontSize={18}>≈$3,599,469,268.28</TYPE.black></FeeRow>
                <FeeRow style={{borderBottom: 'none'}}><TYPE.lightGray fontSize={16}>{t('totalTrans')}</TYPE.lightGray><TYPE.black fontSize={18}>≈$3,599,469,268.28</TYPE.black></FeeRow>
            </FeeWrapper>
            <FeeWrapper>
                <FeeRow><TYPE.lightGray fontSize={16}>{t('24hoursFee')}</TYPE.lightGray><TYPE.black fontSize={18}>≈$3,599,469,268.28</TYPE.black></FeeRow>
                <FeeRow style={{borderBottom: 'none'}}><TYPE.lightGray fontSize={16}>{t('totalFee')}</TYPE.lightGray><TYPE.black fontSize={18}>≈$3,599,469,268.28</TYPE.black></FeeRow>
            </FeeWrapper>
            <UseCaseWrapper>
                <AutoColumn gap="md" justify="center">
                    <RowCenter>
                        <TYPE.black fontSize={26}>{t('dogUseSenarios')}</TYPE.black>
                    </RowCenter>
                    <RowCenter>
                        <UseCaseImage src={CycleImg}/>
                    </RowCenter>
                    <RowCenter>
                    <TYPE.black fontSize={20} fontWeight={300}>{t('repurchase')}</TYPE.black>
                    </RowCenter>
                    <RowCenter>
                        <TYPE.black fontSize={22} fontWeight={300}>{t('repurchaseAndDestory')}</TYPE.black>
                    </RowCenter>
                    <RowCenter>
                        <UseCaseImage src={RewardsImg} style={{width: '62px', height: '70px'}}  />
                    </RowCenter>
                    <RowCenter>
                    <TYPE.black fontSize={20} fontWeight={300}>{t('rewards')}</TYPE.black>
                    </RowCenter>
                    <RowCenter>
                        <TYPE.black fontSize={22} fontWeight={300}>{t('rewardsToPeople')}</TYPE.black>
                    </RowCenter>
                    <RowCenter>
                        <UseCaseImage src={ChatImg} style={{width: '60px', height: '58px'}}  />
                    </RowCenter>
                    <RowCenter>
                    <TYPE.black fontSize={20} fontWeight={300}>Dao</TYPE.black>
                    </RowCenter>
                    <RowCenter>
                        <TYPE.black fontSize={22} fontWeight={300}>{t('communityVote')}</TYPE.black>
                    </RowCenter>
                </AutoColumn>
            </UseCaseWrapper>
            <UseCaseWrapper>
                <AutoColumn gap="md" justify="center">
                    <RowCenter>
                        <TYPE.black fontSize={26}>{t('dogAuditAgency')}</TYPE.black>
                    </RowCenter>
                    <RowCenter>
                        <UseCaseImage src={SlowMistImg} style={{width: '140px', height: '140px'}}/>
                    </RowCenter>
                </AutoColumn>
            </UseCaseWrapper>
        </AppBody>
    )
}