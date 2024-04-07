import React, {useContext, useEffect, useState} from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';


export default function Login() {



    
    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('')
    const [token, setToken] = useState('')


    const navigate = useNavigate()

    // ------------------------------------------------------------------------------ 
    // //--------------------- this is for firebase authentication--------------------
    // ------------------------------------------------------------------------------ 
    // const handleSubmit= async (e)=>{
        //     e.preventDefault();
        //     setErrorMsg('')
        //     try{
            //         const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            //         console.log(userCredentials)
            //         const user = userCredentials.user;
            //         localStorage.setItem("token", user.accessToken);
            //         localStorage.setItem('user', JSON.stringify(user))
    //         navigate('/')
    //     }catch(error){
    //         console.log(error)
    //         setErrorMsg("username or password is invalid")
    //     }
    // }
    
    // ------------------------------------------------------------------------------ 
    // //--------------------- this is for grolis authentication--------------------
    // ------------------------------------------------------------------------------ 

    const [formData, setFormData] = useState(new FormData());
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        formData.append(name, value);
    };
    

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submit button clicked");
        setErrorMsg('')
    
        try {
            const response = await axios.post('https://grolius-api.talrop.works/api/v1/users/student/login/', formData);
            console.log("API call successful");
            const newToken = response.data?.data?.access;
            setToken(newToken);
    
            try {
                const url = 'https://grolius-api.talrop.works/api/v1/users/profile';
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${newToken}`
                    }
                });
    
                localStorage.setItem("token", JSON.stringify(newToken));
                localStorage.setItem('user', JSON.stringify({
                    "email": "example@gmail.com",
                    "name": response.data?.data?.full_name,
                    "picture": response.data?.data?.photo
                }));
    
                if (response.data?.status_code === 6000) {
                    console.log("Login successful");
                    navigate('/');
                }
            } catch (error) {
                console.error('Error:', error);
                setErrorMsg("invalid Data")
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMsg("invalid Data")
        }
    };
    
    
      
    
    return (

    <div className= "w-screen h-screen bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className=" bg-[#fafafa] dark:bg-[#121212] border-4 rounded-xl border-[#121212] dark:border-[#fafafa] p-10">
            <h4 className="text-[#fafafa] mb-3 text-3xl uppercase">Log in</h4>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <p className='text-[#ff0c0c]'>{errorMsg}</p>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required name='country' type="text" onChange={handleInputChange} placeholder='Country'/>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required name='phone' type="text" onChange={handleInputChange} placeholder='Phone Number'/>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required name='password' type="password" onChange={handleInputChange} placeholder='Password'/>
                {/* <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                <input className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg ' required type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/> */}
                <Link to={'/signup'} className='text-white' >new member!</Link>
                <button className='bg-[#121212] text-[#fafafa] border border-[#fafafa] p-5 rounded-lg hover:bg-[#fafafa] hover:text-[#121212]' type="submit">Submit</button>
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
                        console.log(credentialResponseDecode)
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