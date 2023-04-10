import { useState } from 'react'
import { supabase } from '../utils/supabase'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from 'next/router'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async (event) => {
    event.preventDefault()
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (error) {
      console.log('Error:', error.message)
    } else {
      console.log('Usuario:', email)
      Router.push('/')
    }
  }

  return (
  <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container ">
                <a class="navbar-brand" href="#!"><img src="/Logouta.png" alt="logo UTA" id="logoUTA" height={40} width={30}></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
                    </ul>
                </div>
            </div>
    </nav>

    <header class="py-2 bg-light border-bottom mb-4">
            <div class="container">
            <div class="text-center my-5">
                    <h1 class="fw-bolder">Registro</h1>
                    <p class="lead mb-0">¡Ingresa tus datos para crear tu cuenta!</p>
                </div>
            </div>
    </header>

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
          
              <div className="card cascading-right luminicente">
                    <div className="card-body px-5 py-5 px-md-5 shadow-5 text-center" >
                      <form onSubmit={handleSignup}>
                        <div className="form-outline mb-4">
                          <input id="form3Example3"  className="form-control luminicente"  placeholder="Ingrese correo electronico..." type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </div>

                        <div className="form-outline mb-4">

                          <input id="form3Example4" className="form-control luminicente" placeholder="Ingrese contraseña..."type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>

                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4 ">
                          Registrarse
                        </button>
                    </form>
                  </div>
                </div>
                
               </div>
            </div>
    <div >

    </div>
    </div>
  </>
  )
}
