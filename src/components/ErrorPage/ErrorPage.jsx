import React from 'react'
import { Link } from 'react-router-dom'


export default function ErrorPage() {
  return (
    <div className='w-screen h-screen flex justify-center items-center text-white flex-col gap-6'>
        <p>Error 404</p>
        <Link to={'/'}>redirect to home</Link>
    </div>
  )
}
