import { Navigate, Route,  Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Signup from './authentication/signup/signup';
import Login from './authentication/login/login';
import Main from './main/main';
import SinglePage from './SinglePage/SinglePage';
import { createContext, useEffect, useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider,  } from 'react-router-dom';
import Protected from './authentication/Protected';


// create context for changing state for catogary & change main content with catogary
export const  CatogaryState = createContext()

export const UserContext = createContext()


function App() {

    const navigate = useNavigate()
    // useEffect(()=>{
    //     if(localStorage.getItem('token')){
    //         navigate('/');
    //     }else{

    //         navigate('/')
    //     }
    // })
    

    // state for catogary

    const [catogary, setCatogary] = useState("all")


    // state for username
    const [userName, setUserName] = useState('')
    


    return (
        <div className="App">
            <CatogaryState.Provider value={{catogary, setCatogary}}>
                <UserContext.Provider value= {{userName, setUserName}} >  
                    <Routes>
                        <Route path='login' element={<Login />} />
                        <Route path='signup' exact element={<Signup />} />
                        <Route path='singlepage' element={<SinglePage />} />
                        <Route path='/' element={<Protected />} />
                        <Route path='/main'  element={<Main />} />
                    </Routes>
                </UserContext.Provider>
            </CatogaryState.Provider>
        </div>
    );
}

export default App;
