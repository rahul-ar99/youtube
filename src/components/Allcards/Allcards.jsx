import React, { useContext, useEffect, useState } from 'react'
import Singlecards from './SingleCards/Singlecards'
import videoDetails from '../../assets/json/mainpage.json'
import { Link } from 'react-router-dom'
import { CatogaryState } from '../../App'


export default function Allcards() {

    const [isLoading, setIsLoading] = useState(true)
    const {catogary } = useContext(CatogaryState)
    
    
    useEffect(()=>{
        console.log(videoDetails)
    })
    
    
    // ----------------------- with api ---------------------------
    //--------- start
    // const [cardList, setCardList] = useState([])
    // async function fetchData(){
    //     try{
    //         const response = await  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=action&type=video&key=AIzaSyCRyU2LRzZQ-UqHodez5HDAl4RuiQ9fILo`)
    //         const youtubeCards = await response.json()
    //         console.log(youtubeCards['items'])
    //         setCardList(youtubeCards['items'])
    //         setIsLoading(true)
    //     }
    //     catch(error){

    //     }
    // }
    // useEffect(()=>{
    //     fetchData()
    // },[catogary])
    // ----------end


    return (
        <>
        {isLoading &&
    <>
            {/* with api
             <ul id='allcardssection' className='w-full h-max min-h-max flex flex-wrap justify-between p-2 bg-[#fafafa] dark:bg-[#121212] text-black dark:text-white gap-y-5 mt-12'>
            {
                cardList.map((element,index)=> <Link to={'/singlepage'}><li className='w-full'> <Singlecards head={cardList[index].snippet.title} channel={cardList[index].snippet.channelTitle} views={'1.6'} time={"2 hours ago"} image={cardList[index].snippet.thumbnails.high.url} /></li></Link>)
            }
            </ul> */}
            <ul id='allcardssection' className='w-full h-max min-h-max flex flex-wrap justify-between p-2 bg-[#fafafa] dark:bg-[#121212] text-black dark:text-white gap-y-5 mt-12'>
            {
                videoDetails[catogary].map((element,index)=> <Link to={'/singlepage'}><li className='w-full'> <Singlecards head={element.headline} channel={element.channel} views={element.total_views} time={element.upload_time} image={index} /></li></Link>)
            }
            </ul>
        </>
        }
        </>
    )
}
