import React, { useEffect, useState, useContext } from 'react'
import { CatogaryState } from '../../App';

export default function Catogary() {

    const {catogary, setCatogary} = useContext( CatogaryState )

    // catogary options
    const youtubeCategories = ["All","Film & Animation","Autos & Vehicles","Music","Pets & Animals","Sports","Travel & Events","Gaming","People & Blogs","Comedy","Entertainment","News & Politics","Howto & Style","Education","Science & Technology","Nonprofits & Activism","Activism","Food & Drink","Fashion & Beauty","Home & Garden","DIY & Crafts","Health & Fitness","Business & Finance","Shopping","Fine Arts","Literature","Philosophy","Religion","History","Psychology","Sociology","Languages","Travel","Documentary","Technology","Engineering","Mathematics","Physics","Chemistry","Biology","Astronomy","Environmental Science","Medicine","Psychiatry","Dentistry","Nursing","Pharmacy","Veterinary Medicine","Law","Computer Science"];
    
    return (
        <section id='catogary' className=' bg-[#fafafa] dark:bg-[#121212] text-black dark:text-white p-2 w-full py-4'>
            <ul className='flex gap-2  w-full overflow-scroll'>
                {
                    youtubeCategories.map((e)=> {
                        return  <li 
                                    className={ 
                                    `${(catogary==e)?'bg-white text-black':'bg-neutral-800 hover:bg-neutral-400'} 
                                        whitespace-nowrap py-1  px-2 transition duration-300  rounded-lg cursor-pointer font-medium`} 
                                        onClick={()=> {setCatogary(e)}} >{e}
                                </li>
                    })
                }
            </ul>
        </section>
    )
}
