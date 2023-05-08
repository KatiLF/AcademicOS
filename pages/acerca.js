import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import Router from 'next/router'


const inter = Inter({ subsets: ['latin'] })


export default function Acerca() {
  useEffect(()=> {
    supabase.auth.onAuthStateChange((event, session) => {
        if (!session){
        Router.push('/')
        }else {
        Router.push('/acerca')
        }

    })

    }, [])
    return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
          <a className="navbar-brand" href="#!"><img src="/Logouta.png" alt="logo UTA" id="logoUTA" height={40} width={30}></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item"><a className="nav-link" href="Lobby">Inicio</a></li>
                  <li className="nav-item"><a className="nav-link" href="Recursos">Recursos</a></li>
                  <li className="nav-item"><a className="nav-link" href="acerca">Acerca de mi</a></li>
                  <li className="nav-item"><a className="nav-link" onClick = {()=> supabase.auth.signOut()}>Cerrar Sesión</a></li>
              </ul>
          </div>
      </div>
     </nav>
<main>
<section className="py-5 bg-info">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6 text-center ">
        <img ></img>
      </div>
      <div className="col-12 col-md-6 text-center text-md-left align-self-md-center ">
        <h1 className="display-4 font-weight-bold text-light">¿Con que objetivo?</h1> 
        <p className="text-light text-center">El objetivo de su proyecto biblioteca es
           proporcionar a los estudiantes recursos y documentos que les
           permitan repasar y practicar lo aprendido en años anteriores.
           Esto se debe a que, a menudo, los estudiantes necesitan revisar 
           el material que han aprendido previamente para consolidar su conocimiento
           y prepararse para futuros desafíos académicos. </p>  
      </div>
    </div>
  </div>
</section>
<div className="bg-dark">.</div>
<section className="py-4 bg-secondary text-center text-white">

  <div className="container">
    <div className="row">
      <div className="col-12">
        <img ></img>
        <p className="h2">Sobre nosotros</p>
        <p className="h4 font-italic">Un equipo conformado de estudiantes 
          para innovar ideas que puedan ser de gran ayuda para los demas estudiantes.
        </p>
      </div>
    </div>
  </div>
</section>
</main>
<footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Arica, Chile</p></div>
</footer>
    </>
  )
}
