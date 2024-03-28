import React, { useContext, useState } from 'react'
import UserModal from '../modal/userModal'
import { NavbarContext } from '../../App';

export default function Header() {

    const {navbarOpen, setNavbarOpen} = useContext(NavbarContext);


    const [userState, setUserState] = useState(false);


    return (
        <section id='header' className='w-full py-2 bg-[#fafafa] dark:bg-[#121212] text-[#121212] dark:text-[#fafafa] fixed top-0 z-20'>
            <div className='wrapper  flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    <div className='p-1 rounded-full w-11 flex justify-center items-center aspect-square hover:cursor-pointer hover:bg-zinc-700' onClick={()=>setNavbarOpen(navbarOpen?false:true)}>
                        <i class="fa fa-bars text-xl max-[1440px]:text-lg"></i>
                    </div>
                    <h1 className='flex'><a href="#" className='flex text-xl font-extrabold w-[40px] items-center  max-[1440px]:w-[30px]'><img src={require('./../../assets/images/youtube.png')} alt="youtube logo" />YouTube</a></h1>
                </div>
                <div className='flex gap-8 max-[1440px]:gap-5 max-[980px]:hidden'>
                    <div className='flex rounded-3xl border border-gray-400 bg-gray-700  overflow-hidden '>
                        <input type="text" className='bg-[#fafafa] dark:bg-[#121212] py-2 w-[550px] pl-5  max-[1440px]:w-[450px] max-[1280px]:w-[300px]'  placeholder='Search'/>
                        <div className=' hover:cursor-pointer'>
                            <i className='fa fa-search py-2 px-5 text-xl max-[1440px]:text-lg max-[1440px]:px-4 max-[1440px]:py-1'></i>
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-zinc-800 rounded-full hover:bg-zinc-600 hover:cursor-pointer'>
                        <i class=" 	fa fa-microphone text-xl px-4"></i>
                    </div>
                </div>
                <div className='hidden mr-4 hover:bg-zinc-600  rounded-full max-[980px]:flex'>
                    <i className='fa fa-search p-2 '></i>
                </div>
                <div className='flex gap-3 relative max-[980px]:hidden'>
                    <div className='flex w-[45px] h-[45px] justify-center items-center border border-transparent rounded-full hover:bg-zinc-700 hover:cursor-pointer'>
                        <i className=' 	fa fa-video-camera text-xl px-4 max-[1440px]:text-lg'></i>
                    </div>
                    <div className='flex w-[45px] h-[45px] justify-center items-center border border-transparent rounded-full  hover:bg-zinc-700 hover:cursor-pointer'>
                        <i className=' 	fa fa-bell-o text-xl max-[1440px]:text-lg'></i>
                    </div>
                    <div className='flex w-[45px] h-[45px] justify-center items-center border border-transparent rounded-full  hover:bg-zinc-700 hover:cursor-pointer' onClick={()=>setUserState(userState?false:true)}>
                        <i className=' 	fa fa-user-circle-o text-xl p-4 max-[1440px]:text-lg'></i>
                    </div>
                    { userState && <UserModal />}
                </div>
            </div>
        </section>
    )
}
