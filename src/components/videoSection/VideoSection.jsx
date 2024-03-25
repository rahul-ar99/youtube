import React from 'react'

export default function VideoSection() {
    return (
        <div className=''>
            <div className='w-full h-[730px] box-border bg-white'>
                <iframe 
                    className='w-full h-full border-none' 
                    height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe> 
            </div>
            <div className='w-full'>
                <h5 className='text-2xl mt-3'>Periyone Song - Malayalam | The Goat Life | Aadujevitham | A.R. Rahman | Jithin Raj</h5>
                <div className='flex justify-between my-5'>
                    <div className='flex gap-8 items-center'>
                        <div className='flex gap-4 items-center'>
                            <div className='w-[50px] h-min rounded-full overflow-hidden aspect-square bg-black'>
                                <img src={require("../../assets/images/Screenshot from 2024-03-12 14-33-52.png")} alt="channel profile" />
                            </div>
                            <div>
                                <p>Visual Romance</p>
                                <p>29.9k subscribers</p>
                            </div>
                        </div>
                        <button>Subscribe</button>
                    </div>
                    <div className='flex gap-4 '>
                        <div className='flex items-center  bg-zinc-800 rounded-3xl overflow-hidden'>
                            <div className=' hover:bg-zinc-700 hover:cursor-pointer py-3 px-5'>
                                <i className='fa fa-thumbs-up'></i>
                                56K
                            </div>
                            <p>|</p>
                            <div className=' hover:bg-zinc-700 hover:cursor-pointer py-3 px-5'>
                            <i className='fa fa-thumbs-down'></i>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-4 rounded-3xl hover:bg-zinc-700 hover:cursor-pointer'>
                            <i className='fa fa-thumbs-up'></i>
                            <p>Share</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-4 rounded-3xl hover:bg-zinc-700 hover:cursor-pointer'>
                            <i className='fa fa-thumbs-up'></i>
                            <p>Download</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-4 rounded-3xl hover:bg-zinc-700 hover:cursor-pointer'>
                            <i className='fa fa-thumbs-up'></i>
                            <p>Clip</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-4 rounded-3xl hover:bg-zinc-700 hover:cursor-pointer'>
                            <i className='fa fa-thumbs-up'></i>
                            <p>Save</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-4 rounded-3xl hover:bg-zinc-700 hover:cursor-pointer'>
                            <i className='fa fa-thumbs-up'></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
