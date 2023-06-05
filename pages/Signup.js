import { useState } from 'react'
const jwt = require('jsonwebtoken');
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from 'next/router'
import Cookies from 'js-cookie'

//let url ="http://localhost:3000/registro"
let url = "http://190.92.148.107:4041/registro"
const secretToken = "M+Yidu6bWMk9GKkJopL0Sk+ri/RRcBFTF5DmxvbBZaJj+ouXBWzNeSb0qf+rG0GuLXqeD34vZ0RKH2LnS+0INw=="

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async (event) => {
    event.preventDefault()

    let data = {
      email: email,
      password: password
    }
    console.log(data)

    const token = jwt.sign(data, secretToken);

    let config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    fetch(url, config).then((response) => response.json()).then((data) => {
      Cookies.set('email', email, { expires: 7 })
      Router.push('/')
    })

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container ">
          <a className="navbar-brand" href="#!"><img src="/Logouta.png" alt="logo UTA" id="logoUTA" height={40} width={30}></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="/">Inicio</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="py-2 bg-light border-bottom mb-4">
        <div className="container">
          <div className="text-center my-5">
            <h1 className="fw-bolder">Registro</h1>
            <p className="lead mb-0">¡Ingresa tus datos para crear tu cuenta!</p>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            <div className="card cascading-right luminicente">
              <div className="card-body px-5 py-5 px-md-5 shadow-5 text-center" >
                <form onSubmit={handleSignup}>

                  <div className="form-outline mb-4">
                    <input id="form3Example3" className="form-control luminicente" placeholder="Ingrese correo electronico..." type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                  </div>

                  <div className="form-outline mb-4">
                    <input id="form3Example4" className="form-control luminicente" placeholder="Ingrese contraseña..." type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
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
