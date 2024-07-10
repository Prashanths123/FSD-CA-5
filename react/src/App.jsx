import { useState } from 'react'

import './App.css'

import { Route, Routes } from 'react-router-dom';
import Form from './components/register';
import Bookpage from './components/booklist';



function App() {
 
  return (
    <>
  
    <Routes>
      <Route path="/" element={<Bookpage/>} ></Route>
      <Route path="/register" element = {<Form/> }> </Route>

     </Routes>
    </>
  )
}

export default App