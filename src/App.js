import { Route,  Routes} from 'react-router-dom';
import './App.css';
import Signup from './authentication/signup/signup';
import Login from './authentication/login/login';
import Main from './main/main';
import SinglePage from './SinglePage/SinglePage';
import {createContext, useState } from 'react';
import Protected from './authentication/Protected';


// create context for changing state for catogary & change main content with catogary
export const  CatogaryState = createContext()

export const NavbarContext = createContext();


function App() {


    // state for catogary
    const [catogary, setCatogary] = useState("all")



    // state for navbar
    const [navbarOpen, setNavbarOpen] = useState(true);
    

    return (
        <div className="App">
            <CatogaryState.Provider value={{catogary, setCatogary}}>
                <NavbarContext.Provider value={{navbarOpen, setNavbarOpen}}>
                    <Routes>
                        <Route path='login' element={<Login />} />
                        <Route path='signup'  element={<Signup />} />
                        <Route path='singlepage' element={<Protected Component={SinglePage} />} />
                        <Route path='/' element={<Protected Component={Main} />} />
                        {/* <Route path='/'  element={<Main />} /> */}
                    </Routes>
                </NavbarContext.Provider>
            </CatogaryState.Provider>
        </div>
    );
}

export default App;
