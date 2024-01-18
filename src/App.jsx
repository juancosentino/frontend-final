import { useState } from "react"
import HomePage from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactPage from "./pages/ContactPage"
import ErrorPage from "./pages/ErrorPage"
import WePage from "./pages/WePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from './pages/RegisterPage'


const App = () => {

  return (
    <> {/* Router - Routes- Route */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Contact" element={<ContactPage/>} />
          <Route path="/We" element={<WePage/>} />
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/Register" element={<RegisterPage/>}></Route>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
