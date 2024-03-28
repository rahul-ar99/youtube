import React from 'react'
import Catogary from '../Catogay/Catogary'
export default function ListCards() {
    return (
        <div className=' max-[980px]:w-[95vw] max-w-min bg-[#121212]'>
            <div className=' flex w-full overflow-hidden'>
                <Catogary />
            </div>
            <div className='flex flex-col gap-4'>
                {
                    Array.apply(0,Array(20)).map(()=>{

                        return(    
                            <div className='flex gap-2 max-h-min'>
                                <div className="relative">
                                    <div className='w-[200px] max-[1280px]:w-[170px] max-[1080px]:w-[140px] rounded-lg overflow-hidden '>
                                        <img src={require('../../assets/images/mainpage/all/image_1.webp')} className='w-full' alt="" />
                                    </div>
                                    <p className='absolute bottom-2 right-2 z-10 bg-black p-1 rounded-lg text-sm max-[1280px]:text-xs'>12:23</p>
                                </div>
                                <div>
                                    <h6 className="text-ellipsis line-clamp-2 max-[1440px]:text-sm">Periyone Song - Malayalam | The Goat Life | Aadujevitham | A.R. Rahman | Jithin Raj</h6>
                                    <p className='text-zinc-600 max-[1280px]:text-sm max-[1080px]:text-[12px]'>channel name</p>
                                    <p className='text-zinc-600 max-[1280px]:text-sm max-[1080px]:text-[12px]'>98k views - 2 days ago</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
