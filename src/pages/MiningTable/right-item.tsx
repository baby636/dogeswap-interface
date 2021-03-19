import React, {useState} from 'react';
import styled from 'styled-components';
import Row from '../../components/Row';
import { Modal } from 'antd';
import { TYPE } from '../../theme';

const RightFloatWrapper = styled.div`
    position: fixed;
    top: 25%;
    right: 0;
    z-index: 999;
    background: transparent;
`;

const FloatItem = styled.div`
    cursor: pointer;
    width: 3rem;
    text-align: center;
    padding: 0.5rem 0.5rem;
    border-radius: 1rem 0 0 1rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primary7};
`;

const CustomModal  = styled(Modal)`
    .ant-modal-content {
        border-radius: 1rem;
    }

    .ant-modal-body {
        padding: 0;
        padding-top: 24px;
        overflow: hidden;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.bg9};
    }

    .ant-modal-close-icon {
        > svg {
            fill:${({ theme }) => theme.text1};
        }
    }
`;

const ModalRowCenter = styled(Row)`
    box-sizing: border-box;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    justify-content: center;
`;

const ModalLineText = styled(TYPE.black)`
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 0 1rem;
    line-height: 1.4rem;
    margin: 1rem 0 !important;
    font-size: 1rem;
`;

const ModulusImg = styled.img`
    margin-top: 2rem;
    width: 100%;
`;

export default function RightItems() {
    const [modulusVisible, setModulusVisible] = useState(false);
    const [notiVisible, setNotiVisible] = useState(false);
    return (
        <>
            <RightFloatWrapper>
                <FloatItem onClick={() => setModulusVisible(true)}>系数</FloatItem>
                <FloatItem onClick={() => setNotiVisible(true)}>规则</FloatItem>
            </RightFloatWrapper>
            <CustomModal closable visible={modulusVisible} onCancel={() => setModulusVisible(false)} footer={null}>
                <ModalRowCenter>
                    <TYPE.black fontSize={24}>LP区挖矿系数调整</TYPE.black>
                </ModalRowCenter>
                <ModulusImg src="xx" />
            </CustomModal>
            <CustomModal closable visible={notiVisible} onCancel={() => setNotiVisible(false)} footer={null}>
                <ModalRowCenter>
                    <TYPE.black fontSize={24}>LP区挖矿规则</TYPE.black>
                </ModalRowCenter>
                <ModalLineText fontWeight={300}>
                    创池规则：任意项目均可创建 LP 流动池，当该流动池内总资产价值相加达到10万USDT及以上，且连续三日手续费达到100 USDT及以上时，该项目对应 LP 将在48小时左右上线 LP 区参与挖矿。
                </ModalLineText>
                <ModalLineText fontWeight={300}>
                    产币规则：LP挖矿区产币量占总产币量的95%，每个池子间的产币系数取决于该池子前一日的手续费大小，具体手续费可查看页面公告。
                </ModalLineText>
                <ModalLineText fontWeight={300}>
                    个人的产币量 = 个人质押资金量 / 该池子总质押资金量 * 该池子每日产币量
                </ModalLineText>
                <ModalLineText fontWeight={300}>
                    激励对象：新项目上线的第一周平台会给予2-3倍的挖矿系数激励。
                </ModalLineText>
            </CustomModal>
        </>
    )
}