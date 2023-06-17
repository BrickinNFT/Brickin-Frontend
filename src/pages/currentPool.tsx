import React, { useState } from 'react'
import checkBox from '@/assets/checkBox.png'
import pool_1 from '@/assets/pool_1.png'
import pool_2 from '@/assets/pool_2.png'
export default function currentPool() {
  const [currentComponent, setCurrentComponent] = useState('Pool')
  const [nav, setNav] = useState([
    { name: 'Colletions', link: '' },
    { name: 'Pool', link: '' },
    { name: 'Changelog', link: '' },
    { name: 'Slack Community', link: '' },
    { name: 'Suppport', link: '' },
    { name: 'API', link: '' },
    { name: 'Log out', link: '' },
  ])
  const [poolInfo, setPoolInfo] = useState({
    trading: 1,
    buy: 0,
    sell: 1,
  })
  const [pools, setPools] = useState([
    {
      type: 'Buy NFTs',
      address: '0x123...456',
      currentPrice: '1.234 SUI',
      volume: '1.234 SUI',
      delta: '5%',
      balance_1: 30,
      balance_2: 12.345,
      bouningCurve: 'Enponential',
    },
    {
      type: 'Sell NFTs',
      address: '0x123...456',
      currentPrice: '1.234 SUI',
      volume: '1.234 SUI',
      delta: '0.01 SUI',
      balance_1: 30,
      balance_2: 12.345,
      bouningCurve: 'Linear',
    },
  ])
  return (
    <div className="flex justify-center items-center">
      <div className="flex-[3]">
        <nav className="flex items-center">
          <div className=" rounded-2xl flex flex-col items-start w-[272px] bg-white border border-[#EAECF0] border-solid">
            <ul className="w-full">
              {nav.map((item, index) => {
                if (item.name === 'Changelog') {
                  return (
                    <li
                      key={index}
                      className="p-3 border-0 border-[#EAECF0] border-solid w-full border-t cursor-pointer">
                      {item.name}
                    </li>
                  )
                }
                if (item.name === 'API') {
                  return (
                    <li
                      key={index}
                      className="p-3 border-0 border-[#EAECF0] border-solid w-full border-b cursor-pointer">
                      {item.name}
                    </li>
                  )
                }
                if (item.name === currentComponent) {
                  return (
                    <li key={index} className="flex items-center p-3 cursor-pointer">
                      <img src={checkBox} alt="" className="w-6 h-6 mr-2" />
                      {item.name}
                    </li>
                  )
                }
                return (
                  <li key={index} className="p-3 cursor-pointer">
                    {item.name}
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex-[9]">
        <div className="text-gray font-bold flex flex-col items-center">
          <h1 className="text-2xl">Current Pool Status</h1>
          <div className="w-full flex justify-between my-4">
            <div className="flex flex-col items-center">
              <span>Trading Pool</span>
              <span className="text-purple text-2xl">{poolInfo.trading}</span>
            </div>
            <div className="flex flex-col items-center">
              <span>Buy</span>
              <span className="text-purple text-2xl">{poolInfo.buy}</span>
            </div>
            <div className="flex flex-col items-center">
              <span>Sell Pool</span>
              <span className="text-purple text-2xl">{poolInfo.sell}</span>
            </div>
          </div>
          <div className="flex flex-col">
            {pools.map((item, index) => {
              return (
                <div key={index} className="w-[767px] bg-white shadow-pool rounded-lg my-5">
                  <div className="flex justify-between px-8 py-4 items-center">
                    <button className="bg-purple rounded-lg px-4 py-2 text-[#fff] cursor-pointer">{item.type}</button>
                    <div>
                      <span>Address : </span>
                      <span className=" text-purple ml-2">{item.address}</span>
                    </div>
                  </div>
                  <div className="flex px-8 justify-around py-6 border border-[#EAECF0] border-solid border-x-0">
                    <div className="flex flex-col items-center">
                      <span className=" text-gray text-xs">Current Price</span>
                      <span className="text-purple text-xl">{item.currentPrice}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className=" text-gray text-xs">Volume</span>
                      <span className="text-purple text-xl">{item.volume}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className=" text-gray text-xs">Delta</span>
                      <span className="text-purple text-xl">{item.delta}</span>
                    </div>
                  </div>
                  <div className="text-xl flex items-center justify-between px-8 py-4">
                    <div className="flex items-center">
                      <span>Balance : </span>
                      <div className="flex items-center">
                        <img src={pool_1} alt="" className="w-5 ml-4 mr-2" />
                        <span className=" text-purple">{item.balance_1}</span>
                      </div>
                      <div className="flex items-center">
                        <img src={pool_2} alt="" className="w-5 ml-4 mr-2" />
                        <span className=" text-purple">{item.balance_2}</span>
                      </div>
                    </div>
                    <div>
                      <span>Bounding Curve : </span>
                      <span className=" text-purple">Linear</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex justify-center my-4">
            <button className="bg-purple rounded-lg px-4 py-2 text-[#fff] cursor-pointer mx-10">
              View All Transaction
            </button>
            <button className="bg-purple rounded-lg px-4 py-2 text-[#fff] cursor-pointer mx-10">
              View Your Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
