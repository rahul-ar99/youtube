import React, { useEffect, useState, useContext, useRef } from 'react'
import { CatogaryState } from '../../App';

export default function Catogary() {


    // ref for scroll 
    const ref = useRef(null)


    // scrolling function
    const handleScroll=(scrollOffSet)=>{
        ref.current.scrollLeft += scrollOffSet
    }


    // import catogary state from app.js
    const {catogary, setCatogary} = useContext( CatogaryState )


    // available data for catogary
    const catogaryJson = ["all", "music", "movies", "cooking", "programming"]


    // setting catogary in this function
    const catoFun = (element) =>{
        if(catogaryJson.indexOf(element) > -1){
            setCatogary(element)
        }
        else(
            setCatogary('all')
        )
    }
    
    

    // catogary options
    const youtubeCategories = ["all","movies","music","cooking","programming","Vehicles","Pets & Animals","Sports","Travel & Events","Gaming","People & Blogs","Comedy","Entertainment","News & Politics","Howto & Style","Education","Science & Technology","Nonprofits & Activism","Activism","Food & Drink","Fashion & Beauty","Home & Garden","DIY & Crafts","Health & Fitness","Business & Finance","Shopping","Fine Arts","Literature","Philosophy","Religion","History","Psychology","Sociology","Languages","Travel","Documentary","Technology","Engineering","Mathematics","Physics","Chemistry","Biology","Astronomy","Environmental Science","Medicine","Psychiatry","Dentistry","Nursing","Pharmacy","Veterinary Medicine","Law","Computer Science"];
    
    return (
        <section id='catogary' className=' flex bg-[#fafafa] dark:bg-[#121212] text-black dark:text-white p-2 w-full py-4 sticky top-14'>
            <button className="bg-[#121212]  p-4 flex justify-center items-center aspect-square hover:bg-zinc-600 rounded-full" onClick={()=>handleScroll(-200)}><i className='fa fa-arrow-left'></i></button>
            <ul className=' flex gap-2 items-center w-max overflow-scroll scroll-smooth' ref={ref}>
                {
                    youtubeCategories.map((e)=> {
                        return  <li 
                                    className={ 
                                    `${(catogary==e)?'bg-white text-black':'bg-neutral-800 hover:bg-neutral-400'} 
                                        h-min whitespace-nowrap py-1  px-2 transition duration-300  rounded-lg cursor-pointer font-medium max-[1280px]:text-sm  max-[768px]:text-[12px]`} 
                                        onClick={()=> {catoFun(e)}} >{e.toUpperCase()}
                                </li>
                    })
                }
            </ul>
            <button className='bg-[#121212] p-4 flex justify-center items-center aspect-square hover:bg-zinc-600 rounded-full' onClick={()=>handleScroll(200)}><i className='fa fa-arrow-right'></i></button>
        </section>
    )
}
