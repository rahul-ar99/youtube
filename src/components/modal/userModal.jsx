import { signOut } from '@firebase/auth'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { UserContext } from '../../App'


export default function UserModal() {

    const {userName} = useContext(UserContext)

    useEffect(()=>{

    },[userName])

    const navigate = useNavigate()
    
    const handleLogout = async()=>{
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/login")
    }

    return (
        <div className='absolute top-14 bg-zinc-800 border-2 p-2 rounded-lg'>
            <p className='py-2 px-4 hover:cursor-pointer hover:bg-zinc-600 rounded-lg my-2'>{userName[0]}</p>
            <hr />
            <p className='py-2 px-4 hover:cursor-pointer hover:bg-zinc-600 rounded-lg my-2' onClick={handleLogout}>logout</p>
        </div>
        )
}
