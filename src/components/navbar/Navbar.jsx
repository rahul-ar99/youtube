import React from 'react'

export default function Navbar() {
    return (
        <section id='navbarsection' className='flex flex-col min-w-[15%] h-[94vh] overflow-scroll p-4 bg-[#fafafa] dark:bg-[#121212] sticky top-0' >
            <div>
                <ul>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> home</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> shorts</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> subscribtion</li>
                </ul>
            </div>
            <hr />
            <div>
                <h6>You <i className='fa fa-arrow-right'></i></h6>
                <ul>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> history</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> watch later</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> liked videos</li>
                </ul>
            </div>
            <hr />
            <div>
                <h6>subscriptions</h6>
                <ul>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> claire wineland</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> claire wineland</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> claire wineland</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> claire wineland</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> all subscriptions</li>
                </ul>
            </div>
            <hr />
            <div>
                <h6>explore</h6>
                <ul>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> trending</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> shopping</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> music</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> films</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> live</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> gaming</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> news</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> sport</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> learning</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> fashion & beauty</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> podcasts</li>
                </ul>
            </div>
            <hr />
            <div>
                <h6>more from youtube</h6>
                <ul>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> youtube premium</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> youtube music</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> youtube kids</li>
                </ul>
            </div>
            <hr />
            <div>
                <ul>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> settings</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> report history</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> help</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> send feedback</li>
                </ul>
            </div>
            <hr />
            <div  className='details'>
                <ul>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> about</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> press</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> copyright</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> contact us</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> creator</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> advertise</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> developers</li>
                </ul>
                <ul>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> terms</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> privacy</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> policy & safety</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> how youtube works</li>
                    <li className='text-black dark:text-white'><i className='fa fa-car'></i> test new features</li>
                </ul>
                <h5>© 2024 Google LLC</h5>
            </div>

        </section>
    )
}