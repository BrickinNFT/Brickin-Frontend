import React from 'react'
import checkBox from '@/assets/checkBox.png'
import promptBg from '@/assets/promptBg.png'
export default function Prompt() {
    return (
        // <div className="flex  justify-end items-center border border-[green]">
        <div className=" ml-[110px] mt-[20px] ">
            <div className='w-[1410px] h-[650px]  flex justify-between '>
                {/*左侧*/}
                <div className="flex ">
                    <div className="w-[420px] h-[616px] bg-[#fff] rounded-2xl flex flex-col justify-evenly" >
                        <div className="flex items-center text-[#344054] text-[24px] ">
                            <img className='pl-[25px] w-[60px]' src={checkBox} alt=""/>
                            <span className='pl-[15px]'>Collections</span>
                        </div>
                        <span className='text-[#D0D5DD] pl-[25px] text-[24px]'>
                        Pool
                        </span>
                        <div className='h-[352px] flex flex-col justify-around text-[#344054] pl-[25px] text-[24px] border-0 border-t border-b border-t-[#EAECF0]  border-b-[#EAECF0]'>
                            <div>Changelog</div>
                            <div>Slack Community</div>
                            <div>Support</div>
                            <div>API</div>
                        </div>
                        <div className='text-[#344054] pl-[25px] text-[24px] '>
                            Log out
                        </div>
                    </div>
                </div>
                {/*右侧*/}
                <div className="w-[910px] flex flex-col items-center justify-between  " >
                    <img className='w-[300px]' src={promptBg} alt=""/>
                    <div className='w-[100%] font-bold text-[55px] text-center text-[#676C83] '>
                        Your collection seems to be empty,
                        let’s <span className='text-[#7F56D9]'>create </span> your NFT
                        collection on <span className='text-[#7F56D9]'>SUI Network</span>
                    </div>
                    <div className='w-[151px] h-[44px] bg-[#7F56D9] rounded-[8px] text-[#fff] text-center leading-[44px] cursor-pointer'>
                        Click to Create
                    </div>
                </div>
            </div>
        </div>

    )
}
