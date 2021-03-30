import { BigNumber } from 'bignumber.js';
import { useCallback, useEffect, useState } from 'react';
import { getAPYConnectedMinerInfo } from '../../data/farm';

const useGetAPYConnectedMinerInfo = (
    minerContract: any,
) => {
    const [info, setInfo] = useState<{
        DOGPerBlock: BigNumber,
        SINGLE_SHARE: BigNumber,
        LP_SHARE: BigNumber,
        singleAllocPoints: BigNumber,
        lpAllocPoints: BigNumber,
    } | undefined>();

    const fetchAPYConnectedInfo = useCallback(async () => {
        const info = await getAPYConnectedMinerInfo(minerContract);
        setInfo(info);
    }, [minerContract]);

    useEffect(() => {
        if (minerContract) {
            fetchAPYConnectedInfo();
        }
    }, [minerContract]);

    return info;
};

export default useGetAPYConnectedMinerInfo;
