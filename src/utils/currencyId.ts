import { ChainId, Currency, ETHER, Token } from '@uniswap/sdk'
import { isHecoChain } from 'utils'

export function currencyId(currency: Currency, chainId: ChainId | undefined): string {
  if (currency === ETHER) return isHecoChain(chainId) ? 'HT' : 'ETH'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
