import React from 'react'

function Header() {
  return (
    <div className=' w-full h-[60px] bg-[#cff2ec] flex items-center justify-between font-[Merriweather] px-3'>
        <p className=' text-[25px] font-extrabold text-[#2f6960]'>Musify</p>
        <div className=' flex gap-3'>
            <button className=' flex px-5 py-2 bg-[#2f6960] rounded-full text-[#cff2ec]'>Login</button>
            <button className=' flex px-5 py-2 bg-[#2f6960] rounded-full text-[#cff2ec]'>Register</button>
        </div>
    </div>
  )
}

export default Header
