import React, { useContext, useState } from 'react'
import { NavbarContext } from '../../App'

export default function Navbar() {



    const {navbarOpen} = useContext(NavbarContext);

    // for highlight the active section 
    const [activeNav, setActiveNav] = useState('home')

    return (
        <section id='navbarsection' className={`flex ${navbarOpen?"max-[1080px]:fixed":"max-[1080px]:hidden"} max-[1080px]:w-min z-10 flex-col w-max min-w-min h-[94.2vh] overflow-scroll p-4 bg-[#fafafa] dark:bg-[#121212] sticky top-14`}  >
            <div>
                <ul>
                    <li className={`${(activeNav==="home"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("home")}><a href="#"><i className='fa fa-home'></i> home</a></li>
                    <li className={`${(activeNav==="shorts"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("shorts")}><a href="#"><i className='fa fa-film'></i> shorts</a></li>
                    <li className={`${(activeNav==="subscribtion"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("subscribtion")}><a href="#"><i class="material-icons">&#xe064;</i>subscribtion</a></li>
                </ul>
            </div>
            <hr />
            <div>
                <ul>
                    <li className={`${(activeNav==="you"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("you")}><a href="#">You<i className='fa fa-arrow-right'></i></a></li>
                    <li className={`${(activeNav==="history"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("history")}><a href="#"><i class="fa fa-clock-o"></i>history</a></li>
                    <li className={`${(activeNav==="watch later"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("watch later")}><a href="#"><i className='fa fa-clock-o'></i> watch later</a></li>
                    <li className={`${(activeNav==="liked videos"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("liked videos")}><a href="#"><i className='fa fa-thumbs-up'></i> liked videos</a></li>
                </ul>
            </div>
            <hr />
            <div>
                <h6 className='text-black dark:text-white text-xl capitalize'>subscriptions</h6>
                <ul>
                    <li className={`text-black dark:text-white`} ><a href="#" className='flex items-center'>
                        <div className='w-[30px] aspect-square mr-3'>
                            <img src={require(`../../assets/images/mainpage/all/image_1.webp`)} alt="profile photo" className='w-full aspect-square rounded-full' />
                        </div> claire wineland</a>
                    </li>
                    <li className={`text-black dark:text-white`} ><a href="#" className='flex items-center'>
                        <div className='w-[30px] aspect-square mr-3'>
                            <img src={require(`../../assets/images/mainpage/all/image_1.webp`)} alt="profile photo" className='w-full aspect-square rounded-full' />
                        </div> claire wineland</a>
                    </li>
                    <li className={`text-black dark:text-white`} ><a href="#" className='flex items-center'>
                        <div className='w-[30px] aspect-square mr-3'>
                            <img src={require(`../../assets/images/mainpage/all/image_1.webp`)} alt="profile photo" className='w-full aspect-square rounded-full' />
                        </div> claire wineland</a>
                    </li>
                    <li className={`text-black dark:text-white`} ><a href="#" className='flex items-center'>
                        <div className='w-[30px] aspect-square mr-3'>
                            <img src={require(`../../assets/images/mainpage/all/image_1.webp`)} alt="profile photo" className='w-full aspect-square rounded-full' />
                        </div> claire wineland</a>
                    </li>
                    <li className={`text-black dark:text-white`} ><a href="#"><i className='fa fa-list'></i> all subscriptions</a></li>
                </ul>
            </div>
            <hr />
            <div>
                <h6 className='text-black dark:text-white text-xl capitalize'>explore</h6>
                <ul>
                    <li className={`${(activeNav==="trending"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("trending")}><a href="#"><i class='fas fa-fire'></i> trending</a></li>
                    <li className={`${(activeNav==="shopping"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("shopping")}><a href="#"><i class="fa fa-shopping-bag"></i> shopping</a></li>
                    <li className={`${(activeNav==="music"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("music")}><a href="#"><i className='fa fa-music'></i> music</a></li>
                    <li className={`${(activeNav==="films"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("films")}><a href="#"><i className='fa fa-film'></i> films</a></li>
                    <li className={`${(activeNav==="live"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("live")}><a href="#"><i className='fa fa-car'></i> live</a></li>
                    <li className={`${(activeNav==="gaming"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("gaming")}><a href="#"><i className='fa fa-car'></i> gaming</a></li>
                    <li className={`${(activeNav==="news"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("news")}><a href="#"><i className='fa fa-car'></i> news</a></li>
                    <li className={`${(activeNav==="sport"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("sport")}><a href="#"><i className='fa fa-car'></i> sport</a></li>
                    <li className={`${(activeNav==="learning"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("learning")}><a href="#"><i className='fa fa-car'></i> learning</a></li>
                    <li className={`${(activeNav==="fashion"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("fashion")}><a href="#"><i className='fa fa-car'></i> fashion & beauty</a></li>
                    <li className={`${(activeNav==="podcasts"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("podcasts")}><a href="#"><i class="fa fa-podcast"></i> podcasts</a></li>
                </ul>
            </div>
            <hr />
            <div>
                <h6 className='text-black dark:text-white text-xl capitalize'>more from youtube</h6>
                <ul>
                    <li className={`${(activeNav==="youtube premium"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("youtube premium")} ><a href="#"><i className='fa fa-car'></i> youtube premium</a></li>
                    <li className={`${(activeNav==="youtube music"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("youtube music")} ><a href="#"><i className='fa fa-car'></i> youtube music</a></li>
                    <li className={`${(activeNav==="youtube kids"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("youtube kids")} ><a href="#"><i className='fa fa-car'></i> youtube kids</a></li>
                </ul>
            </div>
            <hr />
            <div>
                <ul>
                    <li className={`${(activeNav==="settings"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("settings")} ><a href="#"><i class="fa fa-gear" ></i> settings</a></li>
                    <li className={`${(activeNav==="report history"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("report history")} ><a href="#"><i class="fa fa-flag"></i> report history</a></li>
                    <li className={`${(activeNav==="help"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("help")} ><a href="#"><i class="fa fa-question-circle"></i>help</a></li>
                    <li className={`${(activeNav==="feedback"?"bg-zinc-700":"")} text-black dark:text-white`} onClick={()=>setActiveNav("feedback")} ><a href="#"><i className=' 	far fa-comment-alt'></i> send feedback</a></li>
                </ul>
            </div>
            <hr />
            <div className='details'>
                <div className='flex flex-row flex-wrap list-none gap-x-2'>
                    <li className='text-black dark:text-white'><a href="#">about</a></li>
                    <li className='text-black dark:text-white'><a href="#">press</a></li>
                    <li className='text-black dark:text-white'><a href="#">copyright</a></li>
                    <li className='text-black dark:text-white'><a href="#">contact us</a></li>
                    <li className='text-black dark:text-white'><a href="#">creator</a></li>
                    <li className='text-black dark:text-white'><a href="#">advertise</a></li>
                    <li className='text-black dark:text-white'><a href="#">developers</a></li>
                </div>
                <div className='flex flex-row flex-wrap list-none gap-x-2'>
                    <li className='text-black dark:text-white'><a href="#">terms</a></li>
                    <li className='text-black dark:text-white'><a href="#">privacy</a></li>
                    <li className='text-black dark:text-white'><a href="#">policy & safety</a></li>
                    <li className='text-black dark:text-white'><a href="#">how youtube works</a></li>
                    <li className='text-black dark:text-white'><a href="#">test new features</a></li>
                </div>
                <h5>© 2024 Google LLC</h5>
            </div>

        </section>
    )
}