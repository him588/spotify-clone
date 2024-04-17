import React, {  useEffect, useState } from 'react'
import { Loveicon } from '../icon'
import { playlist, user } from '@/types/type'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Usecurrentuser } from '../custom'

function Likedsection({search}:{search:string}) {
    const {currentuser}=Usecurrentuser()||{}
    const [playlist,setplaylist]=useState(currentuser?.playlist)
    useEffect(()=>{setplaylist(()=>currentuser?.playlist)},[currentuser])
useEffect(()=>{
    setplaylist((prev)=>{
        const newplay=currentuser?.playlist?.filter((play)=>(play.name.toLowerCase()).includes(search))
        return newplay
    })
},[search,currentuser])
  return (
    <div>
     <Link href={"/likedsong"}>
    <div className=' h-[64px] w-full rounded-lg overflow-hidden mt-1 hover:bg-slate-600 hover:bg-opacity-10 p-2 cursor-pointer flex gap-2 '>
        <div className=' h-full w-[50px] bg-gradient-to-r from-indigo-600 to-fuchsia-500  flex flex-col items-center'>
            <Loveicon h={30} w={30} c='white'/>
        </div>
        <div className='' >
            <p className=' text-white text-[18px]'>Liked songs</p>
            <p className=' text-[#808080] text-[14px] font-medium'>Playlist . {currentuser?.likedsong.length} songs</p>
        </div>
    </div>
    </Link>
    {playlist&&(
        playlist.map((play)=><Playlist key={play.id} playlist={play}/>)
    )}
    </div>
  )
}
function Playlist({playlist}:{playlist:playlist}){
    const router=useRouter()
    return <div onClick={()=>router.push(`/playlist/${playlist.id}`)} className=' h-[64px] w-full rounded-lg overflow-hidden mt-1 hover:bg-slate-600 hover:bg-opacity-10 p-2 cursor-pointer flex gap-2 '>
    <div className=' h-full w-[50px] bg-gradient-to-r from-indigo-600 to-fuchsia-500 rounded-md flex flex-col items-center'>
        <Image src={playlist.image} alt='' height={0} width={0} style={{height:"100%",width:"100%"}} unoptimized />
    </div>
    <div className='' >
        <p className=' text-white text-[18px]'>{playlist.name}</p>
        <p className=' text-[#808080] text-[14px] font-medium'>{playlist.ownername}</p>
    </div>
</div>
}

export default Likedsection
