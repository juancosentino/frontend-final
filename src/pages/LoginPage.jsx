import React from 'react'
import LoginC from '../components/LoginC'
import NavbarC from '../components/NavbarC'
import FooterC from '../components/FooterC'
import '../css/LoginC.css'

const LoginPage = () => {
  return (  
    <>
      <NavbarC/>

      <LoginC/>

      <FooterC/>
    </>
  )
}

export default LoginPage