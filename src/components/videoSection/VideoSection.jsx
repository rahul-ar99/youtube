import React from 'react'



export default function VideoSection( props) {

    const item  = props.catogaryProps;
    




    return (
        <div className=''>
            <div className='w-full aspect-video box-border bg-white'>
                <iframe 
                    className='w-full h-full border-none' 
                    height="315"
                    src={`https://www.youtube.com/embed/${item.video_id}`}>
                </iframe> 
            </div>
            <div className='w-full'>
                <h5 className='text-2xl mt-3 max-[1440px]:text-xl  max-[1080px]:text-lg'>{item['headline']}</h5>
                <div className='flex justify-between my-5 items-center max-[640px]:flex-col  max-[640px]:items-start  max-[640px]:gap-y-3'>
                    <div className='flex gap-8 items-center'>
                        <div className='flex gap-4 items-center'>
                            <div className='w-[50px] h-min rounded-full overflow-hidden aspect-square bg-black'>
                                <img src={require("../../assets/images/Screenshot from 2024-03-12 14-33-52.png")} alt="channel profile" />
                            </div>
                            <div>
                                <p className="whitespace-nowrap max-[1080px]:text-sm">{item['channel']}</p>
                                <p className='whitespace-nowrap max-[1080px]:text-sm'>29.9k subscribers</p>
                            </div>
                        </div>
                        <button className='text-sm  bg-white text-black py-2 px-4 h-full rounded-3xl hover:bg-red-600 hover:text-white'>Subscribe</button>
                    </div>
                    <div className='flex gap-4 max-[1550px]:gap-1'>
                        <div className='flex items-center bg-zinc-800 box-content rounded-3xl overflow-hidden h-[50px] max-[640px]:justify-center max-[1440px]:h-[40px] max-[1440px]:py-0 max-[1440px]:px-0'>
                            <div className=' hover:bg-zinc-700 hover:cursor-pointer py-3  px-5 whitespace-nowrap  max-[1440px]:px-3 max-[1080px]:text-sm'>
                                <i className='fa fa-thumbs-up'></i>
                                {item['total_views'].slice(0,4)}K
                            </div>
                            <p>|</p>
                            <div className=' hover:bg-zinc-700 hover:cursor-pointer py-3 px-5 h-min max-[1440px]:px-3 '>
                                <i className='fa fa-thumbs-down'></i>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-2 rounded-3xl h-[50px] max-[1440px]:h-[40px] max-[1440px]:aspect-square justify-center  hover:bg-zinc-700 hover:cursor-pointer  max-[1080px]:hidden'>
                            <i className='fa fa-share'></i>
                            <p className='max-[1440px]:hidden'>Share</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-2 rounded-3xl h-[50px]  max-[1440px]:h-[40px] max-[1440px]:aspect-square justify-center  hover:bg-zinc-700 hover:cursor-pointer max-[1080px]:hidden'>
                            <i className='fa fa-download'></i>
                            <p className='max-[1440px]:hidden'>Download</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-2 rounded-3xl  h-[50px]  max-[1440px]:h-[40px] max-[1440px]:aspect-square justify-center  hover:bg-zinc-700 hover:cursor-pointer max-[1080px]:hidden'>
                            <i className='fa fa-scissors'></i>
                            <p className='max-[1440px]:hidden'>Clip</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-2 rounded-3xl h-[50px]  max-[1440px]:h-[40px] max-[1440px]:aspect-square justify-center  hover:bg-zinc-700 hover:cursor-pointer max-[1080px]:hidden'>
                            <i className='fa fa-save'></i>
                            <p className='max-[1440px]:hidden'>Save</p>
                        </div>
                        <div className='flex items-center gap-1 bg-zinc-800 px-4 rounded-3xl h-[50px] max-[1440px]:h-[40px] max-[1440px]:aspect-square justify-center  hover:bg-zinc-700 hover:cursor-pointer'>
                            <i className='fa fa-ellipsis-h'></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
