import React from 'react'
import '../css/LoginC.css'

const LoginC = () => {
  return (
    <>
        <div className='containerLogin'>
                <div className='section-2 glass'>
                  <form className='m-5'>
                    {/* <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/30760.png" alt="Logo de la veterinaria"
                    className='imgLogin' /> */}
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label ">Usuario</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      placeholder=''/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                      <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-css">Iniciar Sesion</button>
                  </form>
                </div>
        </div>
    </>
  )
}

export default LoginC