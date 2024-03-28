import { signOut } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'


export default function UserModal() {

    const [user, setUser] = useState('')
    useEffect(()=>{
        const userDetails = JSON.parse(localStorage.getItem('user'))
        setUser(userDetails['email'].split('@')[0])
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
        <div className='absolute top-14 bg-zinc-800 border-2 p-2 rounded-lg'>
            <p className='py-2 px-4 hover:cursor-pointer hover:bg-zinc-600 rounded-lg my-2'>{user}</p>
            <hr />
            <p className='py-2 px-4 hover:cursor-pointer hover:bg-zinc-600 rounded-lg my-2' onClick={handleLogout}>logout</p>
        </div>
        )
}
