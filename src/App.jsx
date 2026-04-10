import React from 'react'
import Navbar from './components/Navbar'
import UserHeader from "./routes/UserHeader"
import {BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  const allRouter =[
    ...UserHeader
  ]
  return (
    <>
        <BrowserRouter>
          <Routes>
          {
            allRouter.map((items, index) =>(
              <Route key={index} {...items}/>
            ))
          }
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
