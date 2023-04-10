import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '@/styles/Home.module.css'
import Router from 'next/router'



export default function Lobby() {
    useEffect(()=> {
        supabase.auth.onAuthStateChange((event, session) => {
            if (!session){
            Router.push('/')
            }else {
            Router.push('/Lobby')
            }

        })

        }, [])
  

  return (
    
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!"><img src="/logouta.PNG" alt="logo UTA" id="logoUTA" height={40} width={30}></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link" href="Lobby">Inicio</a></li>
                  <li class="nav-item"><a class="nav-link" href="Recursos">Recursos</a></li>
                  <li class="nav-item"><a class="nav-link" href="acerca">Acerca de mi</a></li>
                  <li class="nav-item"><a class="nav-link" onClick = {()=> supabase.auth.signOut()}>Cerrar Sesión</a></li>
            
                    </ul>
                </div>
            </div>
        </nav>
    
    
        <header class="py-5 bg-light border-bottom mb-4">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">Bienvenido NOMBRE DE ALUMNO</h1>
                    <p class="lead mb-0">Accede a los archivos disponibles o sube el tuyo!</p>
                </div>
            </div>
        </header>
   
        <div class="container">
            <div class="row">

                <div class="col-lg-8">
                    
        
                    <div class="row">
                        <div class="col-lg-6">

                  
                            <div class="card mb-4">
                                <a href="#!"></a>
                                <div class="card-body">
                                    
                                    <h2 class="card-title h4">Intro al Calculo</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Acceder →</a>
                                </div>
                            </div>
                     
                            <div class="card mb-4">
                                <a href="#!"></a>
                                <div class="card-body">
                                    
                                    <h2 class="card-title h4">Intro al Algebra</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Acceder →</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                  
                            <div class="card mb-4">
                                <a href="#!"></a>
                                <div class="card-body">
                                    
                                    <h2 class="card-title h4">Calculo 1</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Acceder →</a>
                                </div>
                            </div>
                  
                            <div class="card mb-4">
                                <a href="#!"></a>
                                <div class="card-body">
                                    
                                    <h2 class="card-title h4">Calculo 2</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Acceder →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
        
                <div class="col-lg-4">
              
                    <div class="card mb-4">
                        <div class="card-header">Archivos Subidos</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">Apuntes Clase 31/03/2023 Algebra II</a></li>
                                        <li><a href="#!">Correción Prueba 1 de Intro al Calculo</a></li>
                                        <li><a href="#!">Guia de Ejercicios Triangulos Intro al Calculo</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <a class="btn btn-primary" href="#!">Subir Archivo →</a>
                </div>
            </div>
        </div>
       
        <footer class="py-5 bg-dark">
      <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Arica, Chile</p></div>
      </footer>
        
        
        </>
  )
}
