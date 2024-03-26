import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Protected() {

    const token = localStorage.getItem('token')

    return (
        token? <Navigate to='/main'  />: <Navigate to='/login' />
    )
}
