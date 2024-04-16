import React from 'react'
import { signIn } from 'next-auth/react'

function Newheader() {
  return (
    <div className='font-[Merriweather] flex items-center justify-between'>
        <p className=' text-white font-semibold text-[25px]'>Musify</p>
        <div className=' flex gap-8  text-white text-[13px] font-medium'>
            <p className=' cursor-pointer'>Discover</p>
            <p className=' cursor-pointer'>Top songs</p>
            <p className=' cursor-pointer'>Genre</p>
            <p className=' cursor-pointer'>Premium</p>
            <p className=' cursor-pointer'>FAQ</p>
        </div>
        <div className='h-[40px] w-[120px] p-[2px] bg-gradient-to-r  from-indigo-600 to-pink-800 rounded-md relative z-30 '>
        <button onClick={()=>signIn("spotify",{callbackUrl:"/home"})} className=' h-full w-full font-light text-[14px] text-white boder-[2px] border-solid bg-[#080808] transition-all duration-150 rounded-md hover:bg-transparent'>Login</button>
        </div>
    </div>
  )
}

export default Newheader
