import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '@/styles/Home.module.css'
import Router from 'next/router'



export default function Recursos() {
    
    useEffect(()=> {
        supabase.auth.onAuthStateChange((event, session) => {
            if (!session){
            Router.push('/')
            }else {
            Router.push('/Recursos')
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
    
      
        <header class="py-2 bg-light border-bottom mb-4">
            <div class="container">
                <div class="text-center my-4 col-lg-4">
                        <div class="card-body">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Buscar asignatura..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button class="btn btn-primary" id="button-search" type="button">Buscar</button>
                            </div>
                        </div>
                </div>
            </div>
        </header>
    
        <div class="container">
            <div class="row">

                <div class="col-lg-12">
                    
          
                    <div class="row">
                        <div class="col-lg-4">

            
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
                        <div class="col-lg-4">
                  
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
                        <div class="col-lg-4">
             
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
                 
                    <nav aria-label="Pagination">
                        <hr class="my-0" />
                        <ul class="pagination justify-content-center my-4">
                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true"></a></li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
                            <li class="page-item"><a class="page-link" href="#!">15</a></li>
                            <li class="page-item"><a class="page-link" href="#!"></a></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
        </div>
       
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Arica, Chile</p></div>
        </footer>
        
        </>
  )
}
