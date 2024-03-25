import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Signup from './authentication/signup/signup';
import Login from './authentication/login/login';
import Main from './main/main';
import SinglePage from './SinglePage/SinglePage';
import { createContext, useState } from 'react';


// create context for changing state for catogary & change main content with catogary
export const  CatogaryState = createContext()


function App() {

    // state for catogary
    const [catogary, setCatogary] = useState("All")


    return (
        <div className="App">
            <CatogaryState.Provider value={{catogary, setCatogary}}>
                <Routes>
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='/' element={<Main />} />
                    <Route path='singlepage' element={<SinglePage />} />
                    {/* <Route path='login' element={<Signup />} /> */}
                </Routes>
            </CatogaryState.Provider>
        </div>
    );
}

export default App;
