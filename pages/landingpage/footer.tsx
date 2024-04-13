import React from 'react'

function Footer() {
  return (
    <div className=' h-[400px] w-full bg-[#220e30] pt-[40px] px-10 flex flex-col gap-4   font-[Merriweather]'>
        <p className=' text-[30px] font-bold text-[#b39fc4] leading-[30px]'>Songify</p>
    <div className=' flex justify-between' >
        <div className=' flex flex-col gap-4 font-[Merriweather] w-[40%] '>
        <p className=' text-[20px] font-bold text-[#b39fc4] font-[Merriweather]'>About us</p>
        <div className=' flex flex-col gap-2 text-[13px] text-[#b39fc4]'>
        <p className=' '>Established in 2024, Songify Music began as a small studio with big dreams  to revolutionize the way music is created, shared, and experienced. Located in delhi,india.</p>
        <p> we have now become a beacon for artists and music lovers who are looking for something different.At Siong Music, we envision a world interconnected through melodies and harmonies.</p>
        <p>We aim to build a community where artists feel empowered to explore their creativity and fans can discover and indulge in diverse musical landscapes.</p>
        </div>
        </div>
        <div className='  flex flex-col gap-3'> 
        <p className=' text-[20px] font-bold text-[#b39fc4] font-[Merriweather]'>About us</p>
        <div className=' text-[13px] font-light text-[#b39fc4] flex flex-col gap-3'>
            <p className=' cursor-pointer'>Vision</p>
            <p className=' cursor-pointer'>Team</p>
            <p className=' cursor-pointer'>Contact us</p>
            <p className=' cursor-pointer'>Going Home</p>
            <p className=' cursor-pointer'>Songs & artist</p>
        </div>

        </div>
        <div className='  flex flex-col gap-3'>
        <p className=' text-[20px] font-bold text-[#b39fc4] font-[Merriweather]'>Contact</p>
        <div className=' text-[13px] font-light text-[#b39fc4] flex flex-col gap-3'>
            <p className=' cursor-pointer'>+9312682274</p>
            <p className=' cursor-pointer'>hk939312@gamil.com</p>
        </div>
        </div>
        <div className='  flex flex-col gap-3'>
        <p className=' text-[20px] font-bold text-[#b39fc4] font-[Merriweather]'>Stay connected </p>
        <div className=' text-[13px] font-light text-[#b39fc4] flex flex-col gap-3'>
            <p className=' cursor-pointer'>Facebook</p>
            <p className=' cursor-pointer'>Twitter</p>
            <p className=' cursor-pointer'>Instagram</p>
            <p className=' cursor-pointer'>LinkedIn</p>
            {/* <p className=' cursor-pointer'>Songs & artist</p> */}
        </div>
        </div>

      
    </div>
    <div className=' h-[.8px] w-full bg-[#b39fc4] opacity-55'></div>
    <div className=' w-full  flex justify-between'>
        <p className='text-[12px] font-medium text-[#b39fc4]'>@songify.All Right Reserve</p>
        <p className='text-[12px] font-medium text-[#b39fc4]'>Terms of use | Privacy Policy</p>
    </div>
    </div>
  )
}

export default Footer

