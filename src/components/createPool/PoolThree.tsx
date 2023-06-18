import React from 'react'
import chain_logo from '@/assets/chain_logo.png'
import token from '@/assets/token.png'
import ntfs from '@/assets/nfts.png'
import step_3 from '@/assets/step_3.png'
import add from '@/assets/add.png'
import transfer from '@/assets/transfer.png'
export default function PoolOne() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <img src={chain_logo} alt="" className="w-24" />
      </div>
      <div className="flex flex-col items-center text-[20px] text-gray my-4">
        <span>Currently Creating New NFT AMM Pool on</span>
        <span className="text-purple font-bold">SUI Network</span>
        <span className="text-[14px]">Create a pool to buy, sell, or trade your NFTs and earn trading fees now</span>
      </div>
      <div className="flex flex-col items-center text-[20px] text-gray mb-4">
        <span className="font-bold">Step 3/3 : Select Pool Type</span>
        <img src={step_3} alt="" />
        <span className="font-bold text-[12px] mt-[-30px]">Step 3/3 : Select Pool Type</span>
      </div>
      <div className="flex"></div>
    </div>
  )
}
