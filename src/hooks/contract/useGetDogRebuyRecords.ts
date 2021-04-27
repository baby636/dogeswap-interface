/* eslint-disable react-hooks/exhaustive-deps */
import BigNumber from 'bignumber.js';
import {useState, useEffect, useCallback} from 'react';
import { getLocalCacheOfRebuyRecords, setLocalCacheOfRebuyRecords } from '../../utils/rebuyRecordsCache';

const rebuyRecordsCache = getLocalCacheOfRebuyRecords();

interface ReturnValue {
    txHash: string,
    blockNumber: number,
    destoryAmount: string,
}

export default function (contract: any, web3: any) {
    const [data, setData] = useState<ReturnValue[]>(rebuyRecordsCache);
    
    const getRebuyRecords = useCallback(async () => {
        if(!contract || !web3) return ;
        const currentBlockNumber = await web3.eth.getBlockNumber();
        let fromBlock = 3654195;
        let res: ReturnValue[] = [];
        while(fromBlock <  currentBlockNumber) {
            const toBlock = currentBlockNumber - fromBlock >= 5000 ? fromBlock + 4999 : currentBlockNumber;
            let tempRes: any[] = []
            try {
                tempRes = await contract.getPastEvents('Transfer', {
                    fromBlock: fromBlock,
                    toBlock: toBlock,
                    filter: {
                        from: '0x6ebcef3db5fbb25f30b3b8bd2cf907340b39ed5d',
                        to: '0x2ce97416cA28498E6F3dd7306d00eA5784deD071'
                    }
                });
            } catch(e) {
                console.error(e);
            }

            fromBlock += 5000;

            if (tempRes.length) {
                tempRes = tempRes.map((item: any) => {
                    return {
                        txHash: item.transactionHash,
                        blockNumber: item.blockNumber,
                        destoryAmount: item.returnValues ? new BigNumber(item.returnValues.value).dividedBy(new BigNumber(10).pow(18)).toFixed(2) : '0',
                    }
                }).reverse();
                res = tempRes.concat(res);
            }
        }

        setLocalCacheOfRebuyRecords(res)
        setData(res);
    }, [contract, web3, data]);

    useEffect(() => {
        if (contract && web3) {
            getRebuyRecords();
        }
    }, [contract, web3]);

    return { data, getRebuyRecords };
}