import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/header/Header'
import VideoSection from '../components/videoSection/VideoSection'
import ListCards from '../components/ListCards/ListCards'
import CommentSection from '../components/CommentSection/CommentSection'
import videoDetails from '../assets/json/mainpage.json'

export default function SinglePage() {

    const {selectCatogary, id} = useParams()

    const [selectedItem, setSelectedItem] = useState({})


    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(true)
        window.scrollTo(0,0)

        setSelectedItem(videoDetails[selectCatogary][id])

        setTimeout(()=>{
            setIsLoading(false)
        },5000)
        console.log(selectCatogary,id)
    },[selectCatogary,id])

    return (
        <>
            <>
            <Header />
            {isLoading? 
                <div className='flex w-screen h-screen justify-center items-center bg-[#121212]'>
                    {/* <h1 className='text-white'>Loading</h1> */}
                    {/* <iframe src="https://gifer.com/embed/74H8" width='480' height='480.000' frameBorder="0" ></iframe> */}
                    <img src={require('../assets/gif/loading.gif')} alt="" className='mix-blend-multiply contrast-200 brightness-200'/>
                </div>
            :
                <div className='w-full pt-24 px-28 max-[1440px]:px-10 max-[1080px]:px-6 bg-[#121212] flex max-[980px]:flex-col text-white gap-5 '>
                    <div className='min-w-[66%]'>
                        <VideoSection  catogaryProps={selectedItem} />
                        <CommentSection />
                    </div>
                    <div className='w-max overflow-hidden '>
                        <ListCards />
                    </div>
                </div>
            }
            </>
        </>
    )
}
