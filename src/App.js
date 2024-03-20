import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Signup from './authentication/signup/signup';
import Login from './authentication/login/login';
import Main from './main/main';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='/' element={<Main />} />
                <Route path='singlepage' element={<Signup />} />
                {/* <Route path='login' element={<Signup />} /> */}
            
            </Routes>
        </div>
    );
}

export default App;
