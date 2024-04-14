import { user } from '@/types/type'
import { useSession } from 'next-auth/react'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context'

function Usecurrentuser() {
    const {data:session}=useSession()
    const [currentuser,setcurrentuser]=useState<user>()
    const{users}=useContext(UserContext)||{}
    useEffect(()=>{
        setcurrentuser((prev)=>{
            const current=users?.filter(user=>user.email===session?.user?.email)[0]
            return current
        })
    },[session,users])
return {currentuser}
  
}

export default Usecurrentuser
