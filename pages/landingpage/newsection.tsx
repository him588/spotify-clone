import { Videoplayicon } from '@/components/icon'
import React from 'react'
import Image from 'next/image'
import image from "../../public/daniel-fontenele-S4KVecxgCDo-unsplash.png"
import secondimage from "../../public/AdobeStock_598696008_Preview.png"

function Newsection() {
  return (
    <div className=' flex justify-between items-center font-[Merriweather] relative '>
        <div className=' w-[60%]'>
            <p className=' text-[60px] leading-[90px] font-extralight text-white'>Dive in a Sonic <span className='block'>Wonderland at Your</span> Fingertips!</p>
            <div className='h-[50px] w-[240px] p-[2px] bg-gradient-to-r  from-indigo-600 to-pink-800 rounded-full mt-4'>
        <button className=' h-full w-full font-light text-[14px] text-white boder-[2px] border-solid bg-[#080808] transition-all duration-150 rounded-full flex items-center justify-center'>Try Premium Feature<Videoplayicon h={30} w={30} c='white'/> </button>
        </div>
        <div className=' flex  items-center gap-7 text-white mt-4 '>
          <div><p className=' text-[24px] font-semibold'>22,450+</p><p>Various singers</p></div>
          <div><p className=' text-[24px] font-semibold'>10,220+</p><p>Albums</p></div>
          <div><p className=' text-[24px] font-semibold'>970,890+</p><p>Song</p></div>
        </div>
        </div>
        <div className=' w-[40%] h-full -mt-[220px] mb relative'>
          <Image src={image} alt=''style={{height:"700px",width:"100%"}}/>
        </div>
        {/* <div className=' w-[40%] h-full -mt-[220px] mb relative'>
          <Image src={secondimage} alt=''style={{height:"700px",width:"100%"}}/>
        </div> */}
    </div>
  )
}

export default Newsection
