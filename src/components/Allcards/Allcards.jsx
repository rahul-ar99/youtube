import React, { useContext, useEffect, useState } from 'react'
import Singlecards from './SingleCards/Singlecards'
import videoDetails from '../../assets/json/mainpage.json'
import { Link } from 'react-router-dom'
import { CatogaryState } from '../../App'
import { SearchContext } from '../../App'


export default function Allcards() {

    const {searchValue, setSearchValue} = useContext(SearchContext)

    const [isLoading, setIsLoading] = useState(true)
    const {catogary } = useContext(CatogaryState)

    const [allData, setAllData] = useState([])
    
    

    useEffect(()=>{
        const filterData = videoDetails[catogary].filter((element)=>{
            return element.headline.toLowerCase().indexOf(searchValue) != -1
        })
        setAllData(filterData)
    },[searchValue, catogary])


    useEffect(()=>{
        setSearchValue("")
    },[catogary])



    useEffect(()=>{
        setIsLoading(true)
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
            <ul id='allcardssection' className='w-full h-max min-h-max flex flex-wrap justify-start p-2 bg-[#fafafa] dark:bg-[#121212] text-black dark:text-white gap-y-5'>
            {
                allData.map((element,index)=><li className='w-[20%] max-[1440px]:w-[25%] max-[1080px]:w-[33%] max-[768px]:w-[50%] max-[480px]:w-[100%]'>  <Link to={`/singlepage/${catogary}/${element.id-1}`}><Singlecards head={element.headline} channel={element.channel} views={element.total_views} time={element.upload_time} image={element.id} /></Link></li>)
            }
            </ul>
        </>
        }
        </>
    )
}
