import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from 'next/router'
const jwt = require('jsonwebtoken');
import styles from '@/styles/Home.module.css'
import Cookies from 'js-cookie'

const secretToken = "M+Yidu6bWMk9GKkJopL0Sk+ri/RRcBFTF5DmxvbBZaJj+ouXBWzNeSb0qf+rG0GuLXqeD34vZ0RKH2LnS+0INw=="
let url = "http://190.92.148.107:4041"


export default function Iniciar() {
  const [email, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = async (event) => {
    event.preventDefault()
    let data = {
      email: email,
      pass: password
    }

    const token = jwt.sign(data, secretToken);

    let config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    fetch(url, config).then((response) => response.json()).then((data) => {
      console.log(data)
      const decoded = jwt.verify(data, secretToken)
      if (decoded.data.session.user.aud == "authenticated") {
        console.log(decoded)
        Cookies.set('sesion', decoded.data.session.access_token, { expires: 7 })
        Cookies.set('email', email, { expires: 7 })
        Router.push('/Lobby')
      } else {
        Router.push('/')
      }
    })
  }
  useEffect(() => {
    const sessionToken = Cookies.get('sesion');
    console.log('Este es el sesion token: ', sessionToken);
    if (document.cookie.indexOf('sesion') === -1) {
      // La cookie no existe
      console.log('la cookie no existe');
      Router.push('/');
    } else {
      // La cookie existe
      Router.push('/Lobby');
      console.log('la cookie no existe');
    }
  }, []);

  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container ">
          <a className="navbar-brand" href=""><img src="/Logouta.png" alt="logo UTA" id="logoUTA" height={40} width={30}></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            </ul>
          </div>
        </div>
      </nav>

      <section className="background-radial-gradient">
        <div className=" container  px-4 py-0 px-md-5 text-center text-lg-start my-5 ">
          <div className="row gx-lg-5  align-items-center mb-5 mt-5 ">
            <div className="col-lg-6 mb-5 mb-lg-0 " >
              <h1 className="my-5 display-5 fw-bold ls-tight" >
                <a href="">
                  <img src="/OSS3.PNG" alt="logo AcademicOS" className="logo" id="logoAcademicOS"></img>                    </a>
              </h1>
              <p className="mb-4 opacity-70 color_texto">
                En este sitio podrás encontrar distintos tipos de archivos que pueden ser de utilidad en tu carrera universitaria. Podrás encontrar pruebas de años anteriores, informes de años previos y guías de ejercicios.
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card cascading-right luminicente">
                <div className="card-body px-5 py-5 px-md-5 shadow-5 text-center" >
                  <div className="text-center my-5">
                    <h1 className="fw-bolder">Iniciar Sesión</h1>
                  </div>
                  <form onSubmit={handleLogin}>
                    <div className="form-outline mb-4">
                      <input
                        id="form3Example3"
                        className="form-control luminicente"
                        placeholder="Correo"
                        type="text"
                        value={email}
                        onChange={(event) => setUsername(event.target.value)}
                      />
                    </div>


                    <div className="form-outline mb-4">

                      <input

                        id="form3Example4"
                        className="form-control luminicente"
                        placeholder="Contraseña"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />

                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4 ">
                      Ingresar
                    </button>
                  </form>
                  <p className="lead mb-0">¿No tienes una cuenta?</p>
                  <br />
                  <a className="btn btn-primary btn-block mb-4 " role="button" href="Signup">
                    Registrarse
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Arica, Chile</p></div>
      </footer>


    </>
  )
}


