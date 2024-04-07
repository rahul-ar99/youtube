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
    const [response, setResponse] = useState(null);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        formData.append(name, value);
    };
    
    
    
  
      // State to store the fetched data
      const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
        const url = 'https://grolius-api.talrop.works/api/v1/users/profile';
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQzOTQ4NTg5LCJpYXQiOjE3MTI0MTI1ODksImp0aSI6IjI5YTBmMDQ2MjYwZTQ3NWY5OGIzMzRiNTkyMTc2ODRhIiwidXNlcl9pZCI6ODJ9.4Se9ir_UMfC37VQC95Zk2tDeJT4E_G4PHfJY6lMmnkk'; // Replace 'your_bearer_token' with your actual token
        console.log(token)

        const response = await axios.get(url, {
            headers: {
            Authorization: `Bearer ${token}`
        }
        });

        setData(response.data);
        console.log(data)
        console.log(response.data['data']['phone'])
        if (data['status_code'] === 6000) {
            // Perform actions if login is successful
            console.log("Login successful");

        }
    } catch (error) {
        console.error('Error:', error);
    }
};

// useEffect(()=>{
    //     fetchData();
    //   }, []); 
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submit button clicked");
    
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
            }
        } catch (error) {
            console.error('Error:', error);
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