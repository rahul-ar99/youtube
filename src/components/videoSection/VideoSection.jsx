import React from 'react'

export default function VideoSection() {
    return (
        <div className=''>
            <div className='w-full aspect-video box-border bg-white'>
                <iframe 
                    className='w-full h-full border-none' 
                    height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe> 
            </div>
            <div className='w-full'>
                <h5 className='text-2xl mt-3 max-[1440px]:text-xl  max-[1080px]:text-lg'>Periyone Song - Malayalam | The Goat Life | Aadujevitham | A.R. Rahman | Jithin Raj</h5>
                <div className='flex justify-between my-5 items-center max-[640px]:flex-col  max-[640px]:items-start  max-[640px]:gap-y-3'>
                    <div className='flex gap-8 items-center'>
                        <div className='flex gap-4 items-center'>
                            <div className='w-[50px] h-min rounded-full overflow-hidden aspect-square bg-black'>
                                <img src={require("../../assets/images/Screenshot from 2024-03-12 14-33-52.png")} alt="channel profile" />
                            </div>
                            <div>
                                <p className="whitespace-nowrap max-[1080px]:text-sm">Visual Romance</p>
                                <p className='whitespace-nowrap max-[1080px]:text-sm'>29.9k subscribers</p>
                            </div>
                        </div>
                        <button className=' max-[1080px]:text-sm'>Subscribe</button>
                    </div>
                    <div className='flex gap-4 max-[1440px]:gap-1'>
                        <div className='flex items-center h-min  bg-zinc-800 rounded-3xl overflow-hidden max-[640px]:justify-center'>
                            <div className=' hover:bg-zinc-700 hover:cursor-pointer py-3  px-5 whitespace-nowrap max-[1440px]:py-1 max-[1440px]:px-3  max-[1080px]:text-sm'>
                                <i className='fa fa-thumbs-up'></i>
                                56K
                            </div>
                            <p>|</p>
                            <div className=' hover:bg-zinc-700 hover:cursor-pointer py-3 px-5 h-min  max-[1440px]:py-1'>
                                <i className='fa fa-thumbs-down'></i>
                            </div>
                        </div>
                        <div className=' flex items-center gap-1 bg-zinc-800 px-4 rounded-3xl h-min py-3 max-[1440px]:py-1 hover:bg-zinc-700 hover:cursor-pointer  max-[1080px]:hidden'>
                            <i className='fa fa-thumbs-up'></i>
                            <p className='max-[1440px]:hidden'>Share</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-4 rounded-3xl h-min py-3  max-[1440px]:py-1 hover:bg-zinc-700 hover:cursor-pointer max-[1080px]:hidden'>
                            <i className='fa fa-thumbs-up'></i>
                            <p className='max-[1440px]:hidden'>Download</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-4 rounded-3xl h-min py-3  max-[1440px]:py-1 hover:bg-zinc-700 hover:cursor-pointer max-[1080px]:hidden'>
                            <i className='fa fa-thumbs-up'></i>
                            <p className='max-[1440px]:hidden'>Clip</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-4 rounded-3xl h-min py-3  max-[1440px]:py-1 hover:bg-zinc-700 hover:cursor-pointer max-[1080px]:hidden'>
                            <i className='fa fa-thumbs-up'></i>
                            <p className='max-[1440px]:hidden'>Save</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-4 rounded-3xl h-min py-3 max-[1440px]:py-1 hover:bg-zinc-700 hover:cursor-pointer'>
                            <i className='fa fa-thumbs-up'></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
