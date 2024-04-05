import React, {useContext, useEffect, useState} from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


export default function Login() {



    
    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('')


    const navigate = useNavigate()

    const handleSubmit= async (e)=>{
        e.preventDefault();
        setErrorMsg('')
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredentials)
            const user = userCredentials.user;
            localStorage.setItem("token", user.accessToken);
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/')
        }catch(error){
            console.log(error)
            setErrorMsg("username or password is invalid")
        }
    }

    
    return (

    <div className= "w-screen h-screen bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className=" bg-[#fafafa] dark:bg-[#121212] border-4 rounded-xl border-[#121212] dark:border-[#fafafa] p-10">
            <h4 className="text-[#fafafa] mb-3 text-3xl uppercase">Log in</h4>
            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <p className='text-[#ff0c0c]'>{errorMsg}</p>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                <Link to={'/signup'} className='text-white' >new member!</Link>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg hover:bg-[#fafafa] hover:text-[#121212]' type="submit"  />
            </form>
            <div className='w-full flex justify-center my-3'>
                <p className='text-white'>or</p>
            </div>
            <div className='w-full flex justify-center'>
                <GoogleLogin    
                    onSuccess={credentialResponse => {
                        const credentialResponseDecode = jwtDecode(credentialResponse.credential)
                        localStorage.setItem("token", JSON.stringify(credentialResponse));
                        localStorage.setItem("user", JSON.stringify(credentialResponseDecode))
                        navigate('/')
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    />;

            </div>
        </div>
    </div>
  )
}