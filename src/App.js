import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Admin from './admin'
import User from './user'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    )
}

export default App
