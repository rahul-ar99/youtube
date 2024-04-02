import React, { useEffect, useState } from 'react'
import Comments from '../../assets/json/comment.json'

export default function CommentSection() {
    
    // comment button show when responsive 980px
    const [commentBtn, setCommentBtn] = useState(false)

    // comment section show and hide with this state
    const [commentShow, setCommentShow] = useState(true)

    // user input comment
    const [userCmt, setUserCmt] = useState('')

    // user sort input
    const [userSort , setUserSort] = useState('')

    // json comment and user input comment
    const [allComments, setAllComments] = useState(Comments)

    // loading comment section
    const [isLoading, setIsLoading] = useState(false)
    
    // get username for comment adding section
    const [user, setUser] = useState('')
    useEffect(()=>{
        const userDetails = JSON.parse(localStorage.getItem('user'))
        setUser(userDetails['email'].split('@')[0])
    })

    const [sortedData, setSortedData] = useState([])


    // when change in sort
    useEffect(() => {
        const fetchData = () => {
            const sortedData = [...allComments].sort((a, b) => {
                const date_b = new Date(b.time);
                const date_a = new Date(a.time);
                if (userSort === "lowLikes") {
                    return a.likes - b.likes;
                } else if (userSort === "moreLikes") {
                    return b.likes - a.likes;
                } else if (userSort === "newCmnts") {
                    return date_b - date_a;
                } else if (userSort === "oldCmnts") {
                    return date_a - date_b;
                }
            });
            setAllComments(sortedData);
            setIsLoading(true);
        };
    
        fetchData();
    }, [userSort]);

    
    // comment added by the user
    const addComment = ()=>{

        // get the time
        const timeNow = new Date()


        // push to array when comment is not empty
        if(userCmt != ""){
            setAllComments([{
                "id": 9,
                "username":`${user}`,
                "comment": userCmt,
                "time": timeNow,
                "likes": 0
            },...allComments])
            setUserCmt('')
        }
    }


    // calculate the time for when the comment was uploaded
    const getTime = (value_1) =>{   
        const uploadTime = new Date(value_1)
        const currentTime = new Date()
        const diffTime = Math.abs(currentTime - uploadTime)
        var timeInMinuts = Math.floor((diffTime/(1000*60)))
        
        if(timeInMinuts<1){
            return " just now"
        }
        var timeInHours = Math.floor((timeInMinuts/60))
        if(timeInHours < 1){
            return timeInMinuts + " minutes ago"
        }
        var timeInDays = Math.floor((timeInHours/24))

        return timeInDays + " days ago"

    }


    useEffect(()=>{
        window.addEventListener("resize",()=>{
            if(window.innerWidth <= 980){
                setCommentShow(false)
                setCommentBtn(true)
            }
            else{
                setCommentShow(true)
                setCommentBtn(false)
            }
        })
    })

    return (
        <div>
            <div className={`${commentBtn?'flex':'hidden'} w-full flex-col items-center justify-center`}>
                <button className='w-min py-2 px-4 rounded-full hover:bg-zinc-700' onClick={()=>setCommentShow(commentShow?false:true)}>
                    <p className="whitespace-nowrap capitalize">{commentShow?"hide comments":"show comments"}</p>
                    <i className='fa fa-arrow-down flex justify-center'></i>
                </button>
            </div>
            {/* {commentShow && */}
                <div className={`${commentShow ? 'block':'hidden'} `}>
                    <div className={`flex gap-5 mb-5 justify-between`}>
                        <p className='text-xl font-semibold max-[980px]:text-base max-[640]:sm'>1884 Comments</p>
                        <div className='flex items-center gap-2 text-xl cursor-pointer  border    py-1 px-2  rounded-xl'>
                            <i className='fa fa-align-right'></i>
                            <select name="commentCatogary" id="commentCatogaryId" className='bg-transparent max-[1080px]:text-sm ' onChange={(e)=>setUserSort(e.target.value)}>
                                <option className='capitalize'  hidden disabled selected value="">sorted by</option>
                                <option className="capitalize" value="moreLikes">more likes</option>
                                <option className="capitalize" value="lowLikes">low likes</option>
                                <option className="capitalize" value="newCmnts">newest comments</option>
                                <option className="capitalize" value="oldCmnts">oldest comments</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex mb-9'>
                        <div className='w-[50px] max-[640px]:w-[30px] aspect-square rounded-full overflow-hidden bg-black mr-5'>
                            <img src={require("../../assets/images/mainpage/all/image_1.webp")} alt="" />
                        </div>
                        <input type="text" className='w-full h-9 bg-transparent border-b-2 max-[640px]:text-sm' placeholder='add your comment' value={userCmt} onChange={(element)=>setUserCmt(element.target.value)}/>
                        <button className='capitalize py-1 px-3 rounded-full hover:bg-zinc-700' onClick={addComment}>add</button>
                    </div>
                    {/* ------------------------------- */}
                    {
                        allComments.map((element)=>{
                            return(
                                <div className='flex my-6'>
                                    <div className='max-w-[40px] rounded-full overflow-hidden aspect-square'>
                                        <img src={require('../../assets/images/mainpage/all/image_10.webp')} className='w-full' alt="" />
                                    </div>
                                    <div className="ml-5">
                                        <div className='flex gap-4 text-sm text-zinc-300'>
                                            <p>@{element.username}</p>
                                            <p className='text-zinc-500'>{getTime(element.time)}</p>
                                        </div>
                                        <p className='line-clamp-2 text-ellipsis max-[640px]:text-xs'>{element.comment}</p>
                                        <div className='flex mt-2  max-[640px]:text-xs'>
                                            <div className='flex gap-0 mr-5 items-center'>
                                                <i className='fa fa-thumbs-up cursor-pointer text-zinc-600 hover:text-white mr-1'></i>
                                                <p>{element.likes}</p>
                                                <i className='fa fa-thumbs-down cursor-pointer text-zinc-600 hover:text-white ml-5'></i>
                                            </div>
                                            <button>replay</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* } */}
        </div>
    )
}
