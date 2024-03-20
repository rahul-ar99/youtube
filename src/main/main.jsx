import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Catogary from '../components/Catogay/Catogary'
import Allcards from '../components/Allcards/Allcards'

export default function Main() {
  return (
    <>
    <Header />
    <div className='w-full'>
        <div className='flex w-full pt-14 relative'>
            <Navbar />
            <div className='w-[85%] '>
                <Catogary />
                <Allcards />
            </div>

        </div>
    </div>
    </>
  )
}
