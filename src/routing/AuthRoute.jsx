import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../authentication/signup/signup';
import Login from '../authentication/login/login';


export default function AuthRoute() {
    return (
        <>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='signup'  element={<Signup />} />
            </Routes>
        </>
    )
}
