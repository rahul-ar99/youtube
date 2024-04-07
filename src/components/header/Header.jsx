import React, { useContext, useEffect, useState } from 'react'
import UserModal from '../modal/userModal'
import { NavbarContext } from '../../App';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../App';
import { userNameContext } from '../../App';
import axios from 'axios';


export default function Header() {


    const {userNameState, setUserNameState} = useContext(userNameContext)

    const {searchValue, setSearchValue} = useContext(SearchContext)


    const [searchBarBool, setSearchBarBool] = useState(false)


    const {navbarOpen, setNavbarOpen} = useContext(NavbarContext);


    const [userState, setUserState] = useState(false);


    const [userDetails, setuserDetails] = useState([])


  

    
    



    useEffect(()=>{
        if(localStorage.getItem('user')){
            const userDetails = JSON.parse(localStorage.getItem('user'))
            setUserNameState({"name":userDetails['name'],'picture':userDetails['picture']})
        }
    },[])




    return (
        <>
        <section id='header' className='w-full py-2 bg-[#fafafa] dark:bg-[#121212] text-[#121212] dark:text-[#fafafa] fixed top-0 z-20'>
            <div className='wrapper  flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    <div className='p-1 rounded-full w-11 flex justify-center items-center aspect-square hover:cursor-pointer hover:bg-zinc-700' onClick={()=>setNavbarOpen(navbarOpen?false:true)}>
                        <i class="fa fa-bars text-xl max-[1440px]:text-lg"></i>
                    </div>
                    <h1 className='flex'><Link to={'/'} className='flex text-xl font-extrabold w-[40px] items-center  max-[1440px]:w-[30px]'><img src={require('./../../assets/images/youtube.png')} alt="youtube logo" />YouTube</Link></h1>
                </div>
                <div className='flex gap-8 max-[1440px]:gap-5 max-[980px]:hidden'>
                    <div className='flex rounded-3xl border border-gray-400 bg-gray-700  overflow-hidden '>
                        <input type="text" className='bg-[#fafafa] dark:bg-[#121212] py-2 w-[550px] pl-5  max-[1440px]:w-[450px] max-[1280px]:w-[300px]'  placeholder='Search' onChange={(element)=>setSearchValue(element.target.value)} value={searchValue}/>
                        <div className=' hover:cursor-pointer'>
                            <i className='fa fa-search py-2 px-5 text-xl max-[1440px]:text-lg max-[1440px]:px-4 max-[1440px]:py-1'></i>
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-zinc-800 rounded-full hover:bg-zinc-600 hover:cursor-pointer'>
                        <i class=" 	fa fa-microphone text-xl px-4"></i>
                    </div>
                </div>
                <div className={`hidden mr-4 hover:bg-zinc-600  rounded-full max-[980px]:flex`} onClick={()=>{setSearchBarBool(searchBarBool?false:true)}}>
                    <i className='fa fa-search p-2 '></i>
                </div>
                <div className='flex gap-3 relative max-[980px]:hidden'>
                    <div className='flex w-[45px] h-[45px] justify-center items-center border border-transparent rounded-full hover:bg-zinc-700 hover:cursor-pointer'>
                        <i className=' 	fa fa-video-camera text-xl px-4 max-[1440px]:text-lg'></i>
                    </div>
                    <div className='flex w-[45px] h-[45px] justify-center items-center border border-transparent rounded-full  hover:bg-zinc-700 hover:cursor-pointer'>
                        <i className=' 	fa fa-bell-o text-xl max-[1440px]:text-lg'></i>
                    </div>
                    <div className='flex w-[45px] h-[45px] justify-center items-center border border-transparent rounded-full overflow-hidden p-1 hover:bg-zinc-700 hover:cursor-pointer' onClick={()=>setUserState(userState?false:true)}>
                        {/* <i className=' 	fa fa-user-circle-o text-xl p-4 max-[1440px]:text-lg'></i> */}
                        <img className='rounded-full' src={userNameState.picture==null?require('../../assets/images/user.png'):userNameState.picture} alt="" />
                    </div>
                    { userState && <UserModal />}
                </div>
            </div>
            {searchBarBool &&
            <div className='w-full bg-[#121212] flex items-center justify-center py-2'>
                <div className='w-[80%] max-[640px]:w-[60%]'>
                    <input className='w-full h-[35px]' type="text" />
                </div>
                <div className='hidden mr-4 hover:bg-zinc-600  rounded-full max-[980px]:flex'>
                    <i className='fa fa-search p-2 '></i>
                </div>
                <div className='hidden mr-4 hover:bg-zinc-600  rounded-full max-[980px]:flex' onClick={()=>setSearchBarBool(false)}>
                    <i className='fa fa-close p-2 '></i>
                </div>

            </div>
            }

        </section>
        </>
    )
}
