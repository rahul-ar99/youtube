import React from 'react'

export default function Signup() {
  return (

    <div className= "w-screen h-screen bg-[#fafafa] dark:bg-[#121212] flex items-center justify-center">
        <div className="h-[80%] aspect-[3/4] bg-[#fafafa] dark:bg-[#121212] border-4 rounded-xl border-[#121212] dark:border-[#fafafa] p-10">
            <h4 className="text-[#fafafa] mb-3 text-3xl uppercase">Sign up</h4>
            <form action="" className='flex flex-col gap-4'>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5' type="text"  placeholder='Name'/>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5' type="text"  placeholder='Email'/>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5' type="text"  placeholder='Number'/>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5' type="password"  placeholder='Password'/>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5' type="password"  placeholder='Confirm Password'/>
            </form>
        </div>
    </div>
  )
}
