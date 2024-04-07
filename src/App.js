import './App.css';
import {createContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AppRoute from './routing/AppRoute';
import AuthRoute from './routing/AuthRoute';
import { GoogleOAuthProvider } from '@react-oauth/google';

// create context for changing state for catogary & change main content with catogary
export const  CatogaryState = createContext()

export const NavbarContext = createContext();

export const SearchContext = createContext()

export const userNameContext = createContext()



function App() {


    const [searchValue, setSearchValue] = useState('')

    const [userNameState, setUserNameState] = useState({})


    // state for catogary
    const [catogary, setCatogary] = useState("all")

    // state for navbar
    const [navbarOpen, setNavbarOpen] = useState(true);


    function handleCallbackResponse(response){
        console.log("encoded jwt id token: "+response.credential)

    }
   

    return (
        <>
            <Helmet>
                <title>YouTube</title>
                <link rel="icon" href={require('./assets/images/youtube.png')} />
                <meta property="og:title" content="Youtube" />
                <meta property="og:image" content={require('./assets/images/youtube.png')} />
            </Helmet>
            <div className="App bg-[#121212]">
                <CatogaryState.Provider value={{catogary, setCatogary}}>
                    <NavbarContext.Provider value={{navbarOpen, setNavbarOpen}}>
                        <SearchContext.Provider value={{searchValue, setSearchValue}}>
                            <userNameContext.Provider value={{userNameState, setUserNameState}}>
                                <GoogleOAuthProvider clientId="454950799743-eor1omrjc6dkhi2da8qk3olasruk2mv2.apps.googleusercontent.com">
                                    <AppRoute />
                                    <AuthRoute />
                                </GoogleOAuthProvider>;
                            </userNameContext.Provider>
                        </SearchContext.Provider>
                    </NavbarContext.Provider> 
                </CatogaryState.Provider>
            </div>
        </>
    );
}

export default App;
