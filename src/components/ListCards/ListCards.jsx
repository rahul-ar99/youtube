import React, { useContext } from 'react'
import Catogary from '../Catogay/Catogary'
import videoDetails from '../../assets/json/mainpage.json'
import { CatogaryState } from '../../App'


export default function ListCards() {

    const { catogary} = useContext(CatogaryState)

    return (
        <div className=' max-[980px]:w-[95vw] max-w-min bg-[#121212]'>
            <div className=' flex w-full overflow-hidden'>
                <Catogary />
            </div>
            <div className='flex flex-col gap-3'>
                {
                    videoDetails[catogary].slice(0,15).map((element,index)=>{
                        

                        return(    
                            <div className='flex gap-2 max-h-min p-1 rounded-xl hover:bg-zinc-800'>
                                <div className="relative">
                                    <div className='w-[200px] aspect-video max-[1280px]:w-[170px] max-[1080px]:w-[140px] rounded-lg overflow-hidden '>
                                        <img src={require(`../../assets/images/mainpage/${catogary}/image_${index+1}.webp`)} className='w-full' alt="" />
                                    </div>
                                    <p className='absolute bottom-2 right-2 z-10 bg-black p-1 rounded-lg text-sm max-[1280px]:text-xs'>12:23</p>
                                </div>
                                <div>
                                    <h6 className="text-ellipsis line-clamp-2 max-[1440px]:text-sm">{element.headline}</h6>
                                    <p className='text-zinc-600 max-[1280px]:text-sm max-[1080px]:text-[12px]'>{element.channel}</p>
                                    <p className='text-zinc-600 max-[1280px]:text-sm max-[1080px]:text-[12px]'>{element.total_views.slice(0,5)}k views - {element.upload_time}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
