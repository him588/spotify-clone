import React, { useContext, useEffect, useState } from 'react'
import { Loveicon } from '../icon'
import { UserContext } from '../context'
import { useSession } from 'next-auth/react'
import { playlist, user } from '@/types/type'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import Link from 'next/link'

function Likedsection() {
    const {users}=useContext(UserContext)||{}
    const [currentuser,setcurrentuser]=useState<user|null>(null)
    const {data:session}=useSession()
    useEffect(()=>{
        const email=session?.user?.email
        setcurrentuser((prev)=>{
            if(users&&email){
                const index = users.findIndex(user => user.email === email);
                if(index!==-1){
                    const newuser=users[index]
                    return newuser
                }else{
                    return prev
                }
            }
            return prev
        })
    },[users,session])

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
    {currentuser&&currentuser.playlist&&(
        currentuser.playlist.map((play)=><Playlist key={play.id} playlist={play}/>)
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
