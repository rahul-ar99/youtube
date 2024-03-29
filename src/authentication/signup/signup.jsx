import React, { useRef, useState } from 'react'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { Link, useNavigate } from 'react-router-dom';




export default function Signup() {

    // import input 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // set error msg for password and email is mistaked
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate()


    const handleSubmit = async (e)=>{
        e.preventDefault();
        setErrorMsg('')
        try{
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredentials.user;
            localStorage.setItem("token", user.accessToken);
            localStorage.setItem("user", JSON.stringify(user))
            navigate('/')
        }catch(error){
            if(password.length<6){
                setErrorMsg("password min length is 6")
            }
            else{
                setErrorMsg('invalid email')
            }
        }
  } 



  return (

    <div className= "w-screen h-screen bg-[#fafafa] dark:bg-[#121212] flex items-center justify-center">
        <div className=" aspect-[3/4] bg-[#fafafa] dark:bg-[#121212] border-4 rounded-xl border-[#121212] dark:border-[#fafafa] p-10">
            <h4 className="text-[#fafafa] mb-3 text-3xl uppercase">Sign up</h4>
            <p className='text-red-500'>{errorMsg}</p>
            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required type="text"  placeholder='Name'/>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' onChange={(e)=>setEmail(e.target.value)} required type="email"  placeholder='Email'/>
                {/* <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required type="text"  placeholder='Number'/> */}
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' onChange={(e)=>setPassword(e.target.value)} required type="password"  placeholder='Password'/>
                {/* <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required type="password"  placeholder='Confirm Password'/> */}
                <Link to={'/login'} className='text-white'>Already a member, login</Link>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg hover:bg-[#fafafa] hover:text-[#121212]' type="submit"  />
            </form>
        </div>
    </div>
  )
}
