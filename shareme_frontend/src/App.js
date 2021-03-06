import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Components/login/Login';
import Home from './Containers/home/Home';

const App = () => {
  return (
    <Routes>
        <Route path = 'login' element = {<Login />}/>
        <Route path = '/*' element = {<Home />} />
    </Routes>
  )
}

export default App
