import './App.css';
import {createContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import AppRoute from './routing/AppRoute';
import AuthRoute from './routing/AuthRoute';


// create context for changing state for catogary & change main content with catogary
export const  CatogaryState = createContext()

export const NavbarContext = createContext();

export const SearchContext = createContext()



function App() {


    const [searchValue, setSearchValue] = useState('')


    // state for catogary
    const [catogary, setCatogary] = useState("all")

    // state for navbar
    const [navbarOpen, setNavbarOpen] = useState(true);
    
    

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
                        <AppRoute />
                        <AuthRoute />
                    </SearchContext.Provider>
                </NavbarContext.Provider> 
            </CatogaryState.Provider>
        </div>
        </>
    );
}

export default App;
