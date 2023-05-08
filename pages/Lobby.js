import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '@/styles/Home.module.css'
import Router from 'next/router'
const jwt = require('jsonwebtoken');
const secretToken = "M+Yidu6bWMk9GKkJopL0Sk+ri/RRcBFTF5DmxvbBZaJj+ouXBWzNeSb0qf+rG0GuLXqeD34vZ0RKH2LnS+0INw=="
let url ="https://middle-two.vercel.app/"



export default function Lobby() {
    data = "sesion actual"

    const token = jwt.sign(data, secretToken);

    let config ={
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    fetch(url, config, async).then((response) => response.json()).then((data) => {
      jwt.verify(token, token1, (decoded) => {
        console.log(decoded)
        console.log("funciono")
      })
      
    })
        
    console.log("aaaa")

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
                  <li className="nav-item"><a className="nav-link">Cerrar Sesión</a></li>
            
                    </ul>
                </div>
            </div>
        </nav>
    
    
        <header className="py-5 bg-light border-bottom mb-4">
            <div className="container">
                <div className="text-center my-5">
                    <h1 className="fw-bolder">Bienvenido NOMBRE DE ALUMNO</h1>
                    <p className="lead mb-0">Accede a los archivos disponibles o sube el tuyo!</p>
                </div>
            </div>
        </header>
   
        <div className="container">
            <div className="row">

                <div className="col-lg-8">
                    
        
                    <div className="row">
                        <div className="col-lg-6">

                  
                            <div className="card mb-4">
                                <a href="#!"></a>
                                <div className="card-body">
                                    
                                    <h2 className="card-title h4">Intro al Calculo</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a className="btn btn-primary" href="#!">Acceder →</a>
                                </div>
                            </div>
                     
                            <div className="card mb-4">
                                <a href="#!"></a>
                                <div className="card-body">
                                    
                                    <h2 className="card-title h4">Intro al Algebra</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a className="btn btn-primary" href="#!">Acceder →</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                  
                            <div className="card mb-4">
                                <a href="#!"></a>
                                <div className="card-body">
                                    
                                    <h2 className="card-title h4">Calculo 1</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a className="btn btn-primary" href="#!">Acceder →</a>
                                </div>
                            </div>
                  
                            <div className="card mb-4">
                                <a href="#!"></a>
                                <div className="card-body">
                                    
                                    <h2 className="card-title h4">Calculo 2</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a className="btn btn-primary" href="#!">Acceder →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
        
                <div className="col-lg-4">
              
                    <div className="card mb-4">
                        <div className="card-header">Archivos Subidos</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Apuntes Clase 31/03/2023 Algebra II</a></li>
                                        <li><a href="#!">Correción Prueba 1 de Intro al Calculo</a></li>
                                        <li><a href="#!">Guia de Ejercicios Triangulos Intro al Calculo</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <a className="btn btn-primary" href="#!">Subir Archivo →</a>
                </div>
            </div>
        </div>
       
        <footer className="py-5 bg-dark">
      <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Arica, Chile</p></div>
      </footer>
        
        
        </>
  )
}
