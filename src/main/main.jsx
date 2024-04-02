import React, { createContext, useState } from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Catogary from '../components/Catogay/Catogary'
import Allcards from '../components/Allcards/Allcards'




export default function Main() {

    return (
        <>
            <Header />
            <div className='w-full h-screen'>
                <div className='flex w-screen pt-14 relative h-max'>
                    <div className='w-[13%] max-[1440px]:w-[18%]  max-[1080px]:w-min'> 
                        <Navbar />
                    </div>
                    <div className="w-[87%] max-[1440px]:w-[82%] max-[1080px]:w-full h-max">
                        {/* <div className=' w-full fixed'> */}
                            <Catogary />
                        {/* </div> */}
                        <Allcards />
                    </div>

                </div>
            </div>
        </>
    )
}
