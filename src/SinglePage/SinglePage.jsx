import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import VideoSection from '../components/videoSection/VideoSection'
import ListCards from '../components/ListCards/ListCards'
import CommentSection from '../components/CommentSection/CommentSection'

export default function SinglePage() {

  useEffect(()=>{
    window.scrollTo(0)
  })

  return (
    <>
        <Header />
        <div className='w-full pt-24 px-28 bg-[#121212] flex text-white gap-5 '>
            <div className='min-w-[66%]'>
                <VideoSection />
                <CommentSection />
            </div>
            <div className='w-max overflow-hidden'>
              	<ListCards />
            </div>
        </div>
    </>
  )
}
