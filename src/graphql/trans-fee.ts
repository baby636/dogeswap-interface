import { gql } from '@apollo/client';
import { BigNumber } from 'bignumber.js';
import client from './index';

export default function transFee(pair: string, startTime: number, endTime: number) {
    return new Promise((resolve, reject) => {
        client
            .query({
                variables: {
                    pair: pair.toLowerCase(),
                    startTime,
                    endTime,
                },
                query: gql`
                    query pairHourData($pair: Bytes!, $startTime: Int!, $endTime: Int!) {
                        pairHourDatas(
                            where: {
                                pair: $pair,
                                hourStartUnix_lt: $endTime,
                                hourStartUnix_gt: $startTime
                            }
                            orderBy: hourStartUnix,
                            orderDirection: asc
                        ) {
                            pair {
                                id
                            }
                            hourStartUnix
                            hourlyVolumeUSD
                        }                    
                    }
                `
            })
            .then(res => {
                const {data} = res;
                let fee = '0.00';
                if (data.pairHourDatas && data.pairHourDatas.length) {
                    fee = new BigNumber(data.pairHourDatas[0].hourlyVolumeUSD * 0.003).toFixed(2);
                }

                resolve(fee);
            })
            .catch(e => {
                console.error(e.message);
                resolve('0.00');
            });
        })
}