import React from 'react'

export default function Header() {
return (
    <section id='header' className='w-full py-2 bg-[#fafafa] dark:bg-[#121212] text-[#121212] dark:text-[#fafafa]'>
        <div className='wrapper  flex justify-between items-center'>
            <div className='flex gap-5 items-center'>
                <div className='p-1'>
                    <i class="fa fa-bars text-xl"></i>
                </div>
                <h1 className='flex'><a href="#" className='flex text-xl font-extrabold w-[40px] items-center'><img src={require('./../../assets/images/youtube.png')} alt="youtube logo" />YouTube</a></h1>
            </div>
            <div className='flex'>
                <div className='flex rounded-3xl border border-gray-400 bg-gray-700  overflow-hidden '>
                    <input type="text" className='bg-[#fafafa] dark:bg-[#121212] py-2 w-[550px] pl-5'  placeholder='Search'/>
                    <div className=''>
                        <i className='fa fa-search py-2 px-5 text-xl'></i>
                    </div>
                </div>
                <div className='flex justify-center items-center border rounded-full'>
                    <i class=" 	fa fa-microphone text-xl px-4"></i>
                </div>
            </div>
            <div className='flex gap-3'>
                <div className='flex w-[45px] h-[45px] justify-center items-center border border-transparent rounded-full'>
                    <i className=' 	fa fa-video-camera text-xl px-4'></i>
                </div>
                <div className='flex w-[45px] h-[45px] justify-center items-center border border-transparent rounded-full'>
                    <i className=' 	fa fa-bell-o text-xl'></i>
                </div>
                <div className='flex w-[45px] h-[45px] justify-center items-center border border-transparent rounded-full'>
                    <i className=' 	fa fa-user-circle-o text-xl p-4'></i>
                </div>
            </div>
        </div>
    </section>
)
}
