/* eslint-disable no-unused-vars */

import './App.css';
import React from 'react';
import {Login,Signup,Home,CreateProduct} from "./Routes/Routes"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/CreateProducts' element={<CreateProduct/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
