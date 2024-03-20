import React from 'react'

export default function Singlecards() {
  return (
    <div className='w-min'>
        <div className='w-[300px] aspect-video overflow-hidden'>
            <img src={require('../../../assets/images/Screenshot from 2024-03-12 14-33-52.png')} className='w-full' alt="video img" />
        </div>
        <div className='flex w-full'>
            <div className='w-[40px] aspect-square'>
                <img src={require('../../../assets/images/Screenshot from 2024-03-12 14-33-52.png')} alt="profile photo" className='w-full aspect-square rounded-full' />
            </div>
            <div className='w-full'>
                <h3 className=' text-xl text-wrap'>the akdf o ewjsdfp jas asjdo wefasoifj </h3>
                <p>channel name</p>
                <p>12M views - 3 days ago</p>
            </div>
        </div>
    </div>
  )
}
