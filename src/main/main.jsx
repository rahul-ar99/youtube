import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Catogary from '../components/Catogay/Catogary'

export default function Main() {
  return (
    <>
    <Header />
    <div className='w-full'>
        <div className='flex'>
            <Navbar />
            <div>
                <Catogary />
            </div>

        </div>
    </div>
    </>
  )
}
