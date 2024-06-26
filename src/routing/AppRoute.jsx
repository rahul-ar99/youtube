import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../main/main';
import SinglePage from '../SinglePage/SinglePage';
import Protected from '../authentication/Protected';
import ErrorPage from '../components/ErrorPage/ErrorPage';


export default function AppRoute() {
  return (
    <>
        <Routes>
            <Route path='singlepage/:selectCatogary/:id' element={<Protected Component={SinglePage} />} />
            <Route path='/' element={<Protected Component={Main} />} />
            {/* <Route path="*" element={<Protected Component={ErrorPage} />} /> */}
        </Routes>
    </>
  )
}
