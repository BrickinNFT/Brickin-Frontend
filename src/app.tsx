import { WalletProvider, SuiWallet, SuietWallet, EthosWallet, MartianWallet } from '@suiet/wallet-kit'
import '@suiet/wallet-kit/style.css'
export function rootContainer(container: any) {
  return (
    <WalletProvider defaultWallets={[SuiWallet, SuietWallet, EthosWallet, MartianWallet]}>{container}</WalletProvider>
  )
}
