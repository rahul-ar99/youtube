import React from 'react'

export default function Singlecards({head, channel, time, views , image}) {
  return (
    <div className='w-min hover:bg-[#1a1a1a] hover:cursor-pointer p-3 rounded-lg'>
        <div className='w-[300px] aspect-video overflow-hidden rounded-2xl hover:rounded-none transition-all duration-500 mb-3'>
            <img src={require(`../../../assets/images/mainpage/all/image_${image}.webp`)} className='w-full' alt="video img" />
        </div>
        <div className='flex w-full'>
            <div className='w-[40px] aspect-square mr-3'>
                <img src={require(`../../../assets/images/mainpage/all/image_1.webp`)} alt="profile photo" className='w-full aspect-square rounded-full' />
            </div>
            <div className='w-full'>
                <h3 className='text-base text-wrap'>{head.slice(0,35)}... </h3>
                <p className="text-sm text-zinc-500">{channel}</p>
                <p className="text-sm text-zinc-500">{views}K views - {time}</p>
            </div>
        </div>
    </div>
  )
}
