import Image from 'next/image'
import React from 'react'

function Thirdsection() {
  return (
    <div className=' w-full  bg-[#c7eae2] flex flex-col gap-[60px] p-8 font-[Merriweather]'>
        <div className=' flex items-center justify-center gap-[60px]'>
            <div className=' relative'>
            <p className='text-[#2f2223] text-[60px] font-extrabold'>Top Artist<span className=' block'>by Musify</span> </p>
            <div className=' h-[60px] w-[60px] rounded-md bg-[#e1e8ba] absolute  -right-[10%] bottom-[60px] -rotate-12 flex items-center justify-center text-[40px] text-[#2f2223] font-semibold'>1</div>
            </div>
            <div className=' h-[200px] w-[300px] rounded-lg overflow-hidden rotate-2'>
                <Image unoptimized src={"https://images.unsplash.com/photo-1521999693742-4717d76f97cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D"} alt='' height={0} width={0} style={{height:"100%",width:"100%"}} />
            </div>
        </div>
        <div className=' flex items-center justify-center gap-[60px]'>
        <div className=' h-[200px] w-[300px] rounded-lg overflow-hidden -rotate-2'>
                <Image unoptimized src={"https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljfGVufDB8MHwwfHx8MA%3D%3D"} alt='' height={0} width={0} style={{height:"100%",width:"100%"}} />
            </div>
            <div className=' relative'>
            <p className='text-[#2f2223] text-[60px] font-extrabold'>Top Songs<span className=' block'>by Musify</span> </p>
            <div className=' h-[60px] w-[60px] rounded-md bg-[#d1bce2] absolute  -left-[10%] bottom-[60px] rotate-12 flex items-center justify-center text-[40px] text-[#2f2223] font-semibold'>2</div>
            </div>
        </div>
        <div className=' flex items-center justify-center gap-[60px]'>
            <div className=' relative'>
            <p className='text-[#2f2223] text-[60px] font-extrabold'>Top Playlist<span className=' block'>by Musify</span> </p>
            <div className=' h-[60px] w-[60px] rounded-md bg-[#63a4f3] absolute  -right-[10%] bottom-[60px] -rotate-12 flex items-center justify-center text-[40px] text-[#2f2223] font-semibold'>3</div>
            </div>
            <div className=' h-[200px] w-[300px] rounded-lg overflow-hidden rotate-2'>
                <Image unoptimized src={"https://images.unsplash.com/photo-1502773860571-211a597d6e4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG11c2ljfGVufDB8MHwwfHx8MA%3D%3D"} alt='' height={0} width={0} style={{height:"100%",width:"100%"}} />
            </div>
        </div>
        {/* <div className=' flex items-center justify-center gap-[60px]'>
        <div className=' h-[200px] w-[300px] rounded-lg overflow-hidden -rotate-2'>
                <Image unoptimized src={"https://plus.unsplash.com/premium_photo-1681999203250-3e8b1b0eef59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG11c2ljfGVufDB8MHwwfHx8MA%3D%3D"} alt='' height={0} width={0} style={{height:"100%",width:"100%"}} />
            </div>
            <div className=' relative'>
            <p className='text-[#2f2223] text-[60px] font-extrabold'>Top Artist<span className=' block'>by Musify</span> </p>
            <div className=' h-[60px] w-[60px] rounded-md bg-[#f3cb5e] absolute  -left-[10%] bottom-[60px] rotate-12 flex items-center justify-center text-[40px] text-[#2f2223] font-semibold'>4</div>
            </div>
        </div> */}
        <div className=' flex items-center justify-center h-[60px]'>
        <button className=' bg-[#2f2223] h-[50px] text-[20px] w-[200px] font-bold rounded-full text-[#efb7bf] transition-all duration-150 hover:h-[52px] hover:w-[205px]'>Explore more</button>
        </div>
      
    </div>
  )
}

export default Thirdsection
