import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'
import Navegador from './Navegador'
import Footer from './Footer'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Descargar() {
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
                  <li className="nav-item"><a className="nav-link" href="/">Cerrar Sesión</a></li>
              </ul>
          </div>
      </div>
      </nav>

      <main className="bg-secondary row p-5">
        
      <aside className=" col-4 col-md-2 offset-0.8 bg-light rounded">
      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
         <option selected>Seleccionar</option>
         <option value="1">Matematica</option>
         <option value="2">Pedagogia</option>
         <option value="3">Derecho</option>
      </select>
      <h1 className="text-dark">Etiqueta</h1>
        <div className="form-check">
           <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <label className="form-check-label" htmlFor="defaultCheck1">
            Default checkbox
        </label>
       </div>
       <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
          <label className="form-check-label" htmlFor="defaultCheck1">
           Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
          <label className="form-check-label" htmlFor="defaultCheck1">
           Default checkbox
          </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <label className="form-check-label" htmlFor="defaultCheck1">
         Default checkbox
       </label>
       </div>
       <div className="form-check">
       <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
       <label className="form-check-label" htmlFor="defaultCheck1">
        Default checkbox
       </label>
       </div>
       <div className="form-check">
       <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
      <label className="form-check-label" htmlFor="defaultCheck1">
        Default checkbox
      </label>
      </div>
      <h1 className="text-dark">Año</h1>
      <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
      <label className="form-check-label" htmlFor="defaultCheck1">
        Default checkbox
       </label>
      </div>
      <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
      <label className="form-check-label" htmlFor="defaultCheck1">
       Default checkbox
      </label>
      </div>
      <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
       <label className="form-check-label" htmlFor="defaultCheck1">
       Default checkbox
      </label>
      </div>
     <div className="form-check">
     <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
     <label className="form-check-label" htmlFor="defaultCheck1">
       Default checkbox
     </label>
    </div>
    <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
    <label className="form-check-label" htmlFor="defaultCheck1">
      Default checkbox
    </label>
    </div>
    <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
    <label className="form-check-label" htmlFor="defaultCheck1">
      Default checkbox
    </label>
    </div>
    </aside>
    <section className=" col-8 col-md-4 container">
    <div className="">
    <a href="#" className="text-dark">Se ha quitado la decoración de texto de este enlace</a>
    </div>
    <div>
    <a href="#" className="text-dark">Se ha quitado la decoración de texto de este enlace</a>
    </div>
   </section>
  </main>
  <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Arica, Chile</p></div>
  </footer>
 </>
 )
}
