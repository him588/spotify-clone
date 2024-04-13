import { Instaicon, Twittericon } from '@/components/icon'
import Facebookicon from '@/components/icon/facebookicon'
import Twitter from 'next-auth/providers/twitter'
import Image from 'next/image'
import React from 'react'

function Lastsection() {
  return (
    <div className=' h-[500px] w-full bg-[#c7eae2] relative gap-9 flex flex-col items-center justify-center font-[Merriweather]  overflow-hidden   '>
        <p className=' text-[100px] leading-[100px] font-extrabold text-[#312324]'>Stay up to date</p>
        <p className=' text-[14px] w-[40%] text-[#312324] text-center'>Join us as we continue to explore the vast world of sound.come and enjoy you best. Dive into our latest releases, meet our artists, and experience the magic of music with Songify.</p>
      <div className=' flex w-[400px] h-[50px]   border-y-[1px] border-l-[1px] border-solid border-[gray] rounded-full overflow-hidden '>
        <input type="text" className=' w-[70%] h-full bg-transparent outline-none px-3 text-[#312324] placeholder:text-[#312324]' placeholder='Enter email' />
        <button className=' w-[30%] h-full rounded-full text-[#c7eae2] bg-[#312324]'>Subscribe</button>
      </div>
      <div className=' absolute -top-2 -left-2 rounded-2xl overflow-hidden rotate-[20deg]'>
      <Image src={"https://images.unsplash.com/photo-1530889927395-8a6a32ebd244?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='' height={0} width={0} unoptimized style={{height:"260px",width:"200px"}}/>
      </div>
      <div className=' absolute -bottom-10 left-[150px] rounded-2xl overflow-hidden -rotate-[10deg]'>
      <Image src={"https://images.unsplash.com/photo-1688387969153-39f12756809b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHNvbmdzfGVufDB8MXwwfHx8MA%3D%3D"} alt='' height={0} width={0} unoptimized style={{height:"260px",width:"200px"}}/>
      </div>
      <div className=' absolute -top-2 -right-[2px] rounded-2xl overflow-hidden rotate-[20deg]'>
      <Image src={"https://images.unsplash.com/photo-1693835777292-cf103dcd2324?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxzb25nc3xlbnwwfDF8MHx8fDA%3D"} alt='' height={0} width={0} unoptimized style={{height:"260px",width:"200px"}}/>
      </div>
      <div className=' absolute -bottom-14 right-[150px] rounded-2xl overflow-hidden -rotate-[10deg]'>
      <Image src={"https://images.unsplash.com/photo-1579191748614-4df6344b2ad7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxzb25nc3xlbnwwfDF8MHx8fDA%3D"} alt='' height={0} width={0} unoptimized style={{height:"260px",width:"200px"}}/>
      </div>
      <div className=' h-[45px] w-[45px] absolute bottom-[20px] right-[30px] bg-[#f3cb5e] z-10 rounded-full flex justify-center cursor-pointer items-center'>
        <Facebookicon h={30} w={30} c='black'/>
      </div>
      <div className=' h-[45px] w-[45px] absolute top-[200px] left-[180px] bg-[#63a4f3] z-10 rounded-full flex justify-center cursor-pointer items-center'>
        <Instaicon h={30} w={30} c='black'/>
      </div>
      <div className=' h-[45px] w-[45px] absolute top-[100px] right-[220px] bg-[#d1bce2] z-10 rounded-full flex justify-center cursor-pointer items-center'>
        <Twittericon h={30} w={30} c='black'/>
      </div>
    </div>
  )
}

export default Lastsection
