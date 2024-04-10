import { Details } from '@/types/type'
import React from 'react'
type newdetails=Details&{cw:number,ch:number}
function Playicon({h,w,c,ch,cw}:newdetails) {
  return (
    <div className={` h-[${ch}px] w-[${cw}px] rounded-full bg-[#1db954] flex items-center justify-center`}>
      <svg width={w} height={h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m6.192 3.67 13.568 7.633a.8.8 0 0 1 0 1.394L6.192 20.33A.8.8 0 0 1 5 19.632V4.368a.8.8 0 0 1 1.192-.697Z" fill={c}></path></g></svg>
    </div>
  )
}

export default Playicon
