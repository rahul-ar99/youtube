import React from 'react'
import Singlecards from './SingleCards/Singlecards'
import videoDetails from '../../assets/json/mainpage.json'
import { Link } from 'react-router-dom'

export default function Allcards() {


  return (
    <section id='allcardssection' className='w-full h-max min-h-max flex flex-wrap justify-between p-2 bg-[#fafafa] dark:bg-[#121212] text-black dark:text-white gap-y-5 mt-12'>
      {
        videoDetails["video_headlines"].map((element,index)=> <Link to={'singlepage'}> <Singlecards head={element.headline} channel={element.channel} views={element.total_views} time={element.upload_time} image={index+1} /></Link>)
      }
    </section>
  )
}
