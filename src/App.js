import React from 'react'
import {BrowserRouter,Route, Routes,Navigate} from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'
import HomePage from './components/HomePage'
import Landing from './components/Landing'
const App = () => {
  return (
    <>

    <NavBar/>
   
    <BrowserRouter>
    <Routes>
                <Route path='/' element={<Navigate to={'/landing'}/>}/>
                <Route path='/landing' element={<Landing />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/homepage' element={<HomePage />}/>
                
                
            </Routes>
    </BrowserRouter>
    </>
    
    )
}

export default App