import Image from 'next/image'
import React from 'react'

function Thirdsection() {
  return (
    <div className=' w-full  bg-[#efb7bf] flex flex-col gap-[60px] p-8 font-[Merriweather]'>
        <div className=' flex items-center justify-center gap-[60px]'>
            <div className=' relative'>
            <p className='text-[#2f2223] text-[60px] font-extrabold'>Top Artist<span className=' block'>by songify</span> </p>
            <div className=' h-[60px] w-[60px] rounded-md bg-[#c7eae2] absolute  -right-[10%] bottom-[60px] -rotate-12 flex items-center justify-center text-[40px] text-[#2f2223] font-semibold'>1</div>
            </div>
            <div className=' h-[200px] w-[300px] rounded-lg overflow-hidden rotate-2'>
                <Image unoptimized src={"https://images.unsplash.com/photo-1521999693742-4717d76f97cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D"} alt='' height={0} width={0} style={{height:"100%",width:"100%"}} />
            </div>
        </div>
        <div className=' flex items-center justify-center gap-[60px]'>
        <div className=' h-[200px] w-[300px] rounded-lg overflow-hidden -rotate-2'>
                <Image unoptimized src={"https://images.unsplash.com/photo-1521999693742-4717d76f97cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D"} alt='' height={0} width={0} style={{height:"100%",width:"100%"}} />
            </div>
            <div className=' relative'>
            <p className='text-[#2f2223] text-[60px] font-extrabold'>Top Songs<span className=' block'>by songify</span> </p>
            <div className=' h-[60px] w-[60px] rounded-md bg-[#d1bce2] absolute  -left-[10%] bottom-[60px] rotate-12 flex items-center justify-center text-[40px] text-[#2f2223] font-semibold'>2</div>
            </div>
        </div>
        <div className=' flex items-center justify-center gap-[60px]'>
            <div className=' relative'>
            <p className='text-[#2f2223] text-[60px] font-extrabold'>Top Playlist<span className=' block'>by songify</span> </p>
            <div className=' h-[60px] w-[60px] rounded-md bg-[#63a4f3] absolute  -right-[10%] bottom-[60px] -rotate-12 flex items-center justify-center text-[40px] text-[#2f2223] font-semibold'>3</div>
            </div>
            <div className=' h-[200px] w-[300px] rounded-lg overflow-hidden rotate-2'>
                <Image unoptimized src={"https://images.unsplash.com/photo-1521999693742-4717d76f97cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D"} alt='' height={0} width={0} style={{height:"100%",width:"100%"}} />
            </div>
        </div>
        <div className=' flex items-center justify-center gap-[60px]'>
        <div className=' h-[200px] w-[300px] rounded-lg overflow-hidden -rotate-2'>
                <Image unoptimized src={"https://images.unsplash.com/photo-1521999693742-4717d76f97cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D"} alt='' height={0} width={0} style={{height:"100%",width:"100%"}} />
            </div>
            <div className=' relative'>
            <p className='text-[#2f2223] text-[60px] font-extrabold'>Top Artist<span className=' block'>by songify</span> </p>
            <div className=' h-[60px] w-[60px] rounded-md bg-[#f3cb5e] absolute  -left-[10%] bottom-[60px] rotate-12 flex items-center justify-center text-[40px] text-[#2f2223] font-semibold'>4</div>
            </div>
        </div>
      
    </div>
  )
}

export default Thirdsection
