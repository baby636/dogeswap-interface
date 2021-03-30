/* eslint-disable */
// @ts-nocheck
import { gql } from '@apollo/client';

export const FACTORY_ADDRESS = '0x0419082bb45f47fe5c530ea489e16478819910f3'

export const BUNDLE_ID = '1'

export const GET_BLOCK = gql`
  query blocks($timestampFrom: Int!, $timestampTo: Int!) {
    blocks(
      first: 1
      orderBy: timestamp
      orderDirection: asc
      where: { timestamp_gt: $timestampFrom, timestamp_lt: $timestampTo }
    ) {
      id
      number
      timestamp
    }
  }
`

export const GET_BLOCKS = (timestamps) => {
  let queryString = 'query blocks {'
  queryString += timestamps.map((timestamp) => {
    return `t${timestamp}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${timestamp}, timestamp_lt: ${
      timestamp + 600
    } }) {
        number
      }`
  })
  queryString += '}'
  return gql(queryString)
}

export const GLOBAL_DATA = (block?) => {
  const queryString = ` query dogeswapFactories {
        dogeswapFactories(
         ${block ? `block: { number: ${block}}` : ``} 
         where: { id: "${FACTORY_ADDRESS}" }) {
          id
          totalVolumeUSD
          totalVolumeHT
          untrackedVolumeUSD
          totalLiquidityUSD
          totalLiquidityHT
          txCount
          pairCount
          userCount
          mintDogTokens
        }
      }`
  return gql(queryString)
}
