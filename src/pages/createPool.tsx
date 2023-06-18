import React, { useState } from 'react'
import Nav from '@/components/Nav'
import PoolOne from '@/components/createPool/PoolOne'

export default function currentPool() {
  const [currentNav, setCurrentNav] = useState('Pool')
  const [step, setStep] = useState(1)
  return (
    <div className="flex justify-center items-center">
      <div className="flex-[3]">
        <Nav currentNav={currentNav}></Nav>
      </div>
      <div className="flex-[9]">{step === 1 && <PoolOne></PoolOne>}</div>
    </div>
  )
}
