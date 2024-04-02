import React, { useContext } from 'react'
import { CatogaryState } from '../../../App'

export default function Singlecards({head, channel, time, views , image}) {

    const { catogary } = useContext(CatogaryState)


  return (
    <div className='w-[100%] hover:bg-[#1a1a1a] hover:cursor-pointer py-3 px-2 rounded-lg'>
        <div className='w-full  aspect-video overflow-hidden rounded-2xl hover:rounded-none transition-all duration-500 mb-3'>
            <img src={require(`../../../assets/images/mainpage/${catogary}/image_${image+1}.webp`)} className='w-full' alt="video img" />
        </div>
        <div className='flex w-full'>
            <div className='w-[40px] aspect-square mr-3'>
                <img src={require(`../../../assets/images/mainpage/all/image_1.webp`)} alt="profile photo" className='w-full aspect-square rounded-full' />
            </div>
            <div className='w-full'>
                <h3 className='text-base text-wrap max-[1440px]:text-sm'>{head.slice(0,35)}... </h3>
                <p className="text-sm text-zinc-500">{channel}</p>
                <p className="text-sm text-zinc-500">{views}K views - {time}</p>
            </div>
        </div>
    </div>
    // <div className='w-min max-[640px]:w-full hover:bg-[#1a1a1a] hover:cursor-pointer p-3 rounded-lg'>
    //     <div className='w-[300px] max-[1280px]:w-[260px] max-[640px]:w-full aspect-video overflow-hidden rounded-2xl hover:rounded-none transition-all duration-500 mb-3'>
    //         <img src={require(`../../../assets/images/mainpage/${catogary}/image_${image}.webp`)} className='w-full' alt="video img" />
    //     </div>
    //     <div className='flex w-full'>
    //         <div className='w-[40px] aspect-square mr-3'>
    //             <img src={require(`../../../assets/images/mainpage/all/image_${image}.webp`)} alt="profile photo" className='w-full aspect-square rounded-full' />
    //         </div>
    //         <div className='w-full'>
    //             <h3 className='text-base text-wrap max-[1440px]:text-sm'>{head.slice(0,35)}... </h3>
    //             <p className="text-sm text-zinc-500">{channel}</p>
    //             <p className="text-sm text-zinc-500">{views}K views - {time}</p>
    //         </div>
    //     </div>
    // </div>
  )
}
