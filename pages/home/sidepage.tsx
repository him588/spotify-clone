import React from 'react'
import Header from './header'
import { Card } from '@/components/core'
import Useplaylist from '@/components/custom/useplaylists'
import { useSession } from 'next-auth/react';

function Sidepage() {
  const {data}=useSession()
  // const {accessToken}=data
  
  const playlistInfo = Useplaylist();
  playlistInfo()
  return (
    <div className=' h-full w-full bg-[#121212] rounded-md'>
      <div className=' p-3'>
        <Header/>
      </div>
      <div></div>
      <div className=' px-3 gap-3 flex flex-col'>
        <p className=' text-[24px] text-white font-bold  '>Your top mixes</p>
        <div className=''>
          <Card/>
        </div>
      </div>
      
    </div>
  )
}

export default Sidepage
