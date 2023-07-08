"use client";
// components in next.js are server-based by default
//make the component client-faced / client-based, not server-based - this is done for components that handle some user action

import { CustomButtonProps } from '@/types'
import Image from 'next/image'

const CustomButton = ({ title, containerStyles, handleClick}: CustomButtonProps) => {
  return (
    <button disabled={false}
            type={"button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
    >
        <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton