import React from 'react'
import Image from 'next/image'
import { Playlist } from '@/types/type'

function Card({playlist}:{playlist:Playlist}) {

  
  return (
    <div onClick={()=>console.log(playlist.id)} className=' flex flex-col w-[100%] h-[260px] p-2  rounded-lg cursor-pointer hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-5 hover:bg-gray-200   '>
<Image height={0} width={0} unoptimized style={{
  width:"100%",
  height:"180px",
  borderRadius:"8px"
}} alt='' src={playlist.images[0].url}  />
      <p className=' text-white py-1 font-medium   text-[17px] '>{playlist.name.slice(0,14)}...</p>
      <div className='flex flex-wrap text-[#787878] text-[14px] gap-1 font-medium '>
        <p className=' cursor-pointer hover:underline-offset-3 hover:underline'>{playlist.owner.display_name}</p>
        
      </div>
    </div>
  )
}

export default Card
