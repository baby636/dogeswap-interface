import { gql } from '@apollo/client';
import { client } from './index';

export default function getPools() {
    return new Promise((resolve, reject) => {
        client
            .query({
                query: gql`
                query mintPools {
                  mintPools {
                    id
                    poolType
                    pair {
                      id
                      token0 {
                        id
                        name
                        symbol
                      }
                      token1 {
                        id
                        name
                        symbol
                      }
                    }
                    token {
                        id
                        name
                        symbol
                    }                  
                    allocPoint
                  }
                }
                `
            })
            .then(res => {
                const {data} = res;
                resolve(data.mintPools);
            })
            .catch(e => {
                console.error(e);
                resolve(null);
            });
        })
}