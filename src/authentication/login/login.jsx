import React, {useContext, useEffect, useState} from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'

export default function Login() {


    const {setUserName} = useContext(UserContext)

    
    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('')


    useEffect(()=>{
        setUserName((email.split("@")))
    },[email])

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

    <div className= "w-screen h-screen bg-[#fafafa] dark:bg-[#121212] flex items-center justify-center">
        <div className=" bg-[#fafafa] dark:bg-[#121212] border-4 rounded-xl border-[#121212] dark:border-[#fafafa] p-10">
            <h4 className="text-[#fafafa] mb-3 text-3xl uppercase">Log in</h4>
            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <p className='text-[#ff0c0c]'>{errorMsg}</p>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                <Link to={'/signup'} className='text-white' >new member!</Link>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg hover:bg-[#fafafa] hover:text-[#121212]' type="submit"  />
            </form>
        </div>
    </div>
  )
}