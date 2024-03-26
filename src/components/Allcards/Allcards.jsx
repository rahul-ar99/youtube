import React, { useContext } from 'react'
import Singlecards from './SingleCards/Singlecards'
import videoDetails from '../../assets/json/mainpage.json'
import { Link } from 'react-router-dom'
import { CatogaryState } from '../../App'


export default function Allcards() {



  const {catogary } = useContext(CatogaryState)

  return (
    <section id='allcardssection' className='w-full h-max min-h-max flex flex-wrap justify-between p-2 bg-[#fafafa] dark:bg-[#121212] text-black dark:text-white gap-y-5 mt-12'>
      {
        videoDetails[catogary].map((element,index)=> <Link to={'/singlepage'}> <Singlecards head={element.headline} channel={element.channel} views={element.total_views} time={element.upload_time} image={index+1} /></Link>)
      }
    </section>
  )
}
