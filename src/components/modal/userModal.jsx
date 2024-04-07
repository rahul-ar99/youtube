import { signOut } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'


export default function UserModal() {

    const [user, setUser] = useState('')
    const [userImg, setUserImg] = useState('')
    useEffect(()=>{
        const userDetails = JSON.parse(localStorage.getItem('user'))
        setUser(userDetails['name'])
        setUserImg(userDetails['picture']==null?require('../../assets/images/user.png'):userDetails['picture'])
        // setUser(userDetails['email'].split('@')[0])
        console.log(user)
    })

    const navigate = useNavigate()
    
    const handleLogout = async()=>{
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/login")
    }

    return (
        <div className='absolute top-14 right-1 bg-zinc-800 box-content border-2 p-2 rounded-lg'>
            <div className='flex items-center hover:bg-zinc-600 rounded-lg my-2'>
                <div className='max-h-[50px] min-h-[30px] aspect-square bg-cover  rounded-full overflow-hidden'>
                    <img src={`${userImg}`} alt="userImg" />
                </div>
                <p className='py-2 px-4 hover:cursor-pointer whitespace-nowrap hover:bg-zinc-600 rounded-lg '>{user}</p>

            </div>
            <hr />
            <p className='py-2 px-4 hover:cursor-pointer hover:bg-zinc-600 rounded-lg my-2' onClick={handleLogout}>logout</p>
        </div>
        )
}
