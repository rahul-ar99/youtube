import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Catogary from '../components/Catogay/Catogary'
import Allcards from '../components/Allcards/Allcards'



export default function Main() {




    return (
        <>
        <Header />
        <div className='w-full h-screen'>
            <div className='flex w-full pt-14 relative h-max'>
                <Navbar />

                <div className="w-max h-max">
                    <div className=' w-full fixed'>
                        <Catogary />
                    </div>
                    <Allcards />
                </div>

            </div>
        </div>
        </>
    )
}
