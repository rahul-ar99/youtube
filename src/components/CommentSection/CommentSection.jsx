import React from 'react'

export default function CommentSection() {
    return (
        <div>
            <div className='flex gap-5 mb-5'>
                <p className='text-xl font-semibold max-[980px]:text-base max-[640]:sm'>1884 Comments</p>
                <div className='flex items-center gap-2 text-xl'>
                    <i className='fa fa-thumbs-up'></i>
                    <p>filter</p>
                </div>
            </div>
            <div className='flex mb-9'>
                <div className='w-[50px] max-[640px]:w-[30px] aspect-square rounded-full overflow-hidden bg-black mr-5'>
                    <img src={require("../../assets/images/mainpage/all/image_1.webp")} alt="" />
                </div>
                <input type="text" className='w-full h-9 bg-transparent border-b-2 max-[640px]:text-sm' placeholder='add your comment' />
            </div>
            {/* ------------------------------- */}
            {
                Array.apply(0,Array(10)).map(()=>{
                    return(
                        <div className='flex my-3'>
                            <div className='w-[50px] rounded-full overflow-hidden aspect-square'>
                                <img src={require('../../assets/images/mainpage/all/image_10.webp')} alt="" />
                            </div>
                            <div className="ml-5">
                                <div className='flex gap-4 text-sm'>
                                    <p>@asdfsdfsd</p>
                                    <p className='text-zinc-500'>6 days ago</p>

                                </div>
                                <p className='text-sm line-clamp-2 text-ellipsis max-[640px]:text-xs'>aslfksdjfopsdjf sodif jseopdifjw eoipfsadpoif mesaoipf uawepsofsamdopfisudaf oipcvpoiasdj vcopweriuf posdifmv pasodif uweapofiusadofijsda fopi</p>
                                <div className='flex mt-2  max-[640px]:text-xs'>
                                    <div className='flex gap-3 mr-5 items-center'>
                                        <i className='fa fa-thumbs-up'></i>
                                        <p>1.4k</p>
                                        <i className='fa fa-thumbs-down'></i>
                                    </div>
                                    <p>replay</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
