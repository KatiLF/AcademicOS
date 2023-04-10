import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'
import Navegador from './Navegador'
import Footer from './Footer'
import { useState } from 'react'
import { supabase } from '../utils/supabase'

const inter = Inter({ subsets: ['latin'] })

export default function Descargar() {
    return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
          <a class="navbar-brand" href="#!">Logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item"><a class="nav-link" href="Lobby">Inicio</a></li>
                  <li class="nav-item"><a class="nav-link" href="Recursos">Recursos</a></li>
                  <li class="nav-item"><a class="nav-link" href="acerca">Acerca de mi</a></li>
                  <li class="nav-item"><a class="nav-link" href="/">Cerrar Sesión</a></li>
              </ul>
          </div>
      </div>
      </nav>

      <main class="bg-secondary row p-5">
        
      <aside class=" col-4 col-md-2 offset-0.8 bg-light rounded">
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
         <option selected>Seleccionar</option>
         <option value="1">Matematica</option>
         <option value="2">Pedagogia</option>
         <option value="3">Derecho</option>
      </select>
      <h1 class="text-dark">Etiqueta</h1>
        <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <label class="form-check-label" htmlFor="defaultCheck1">
            Default checkbox
        </label>
       </div>
       <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
          <label class="form-check-label" htmlFor="defaultCheck1">
           Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
          <label class="form-check-label" htmlFor="defaultCheck1">
           Default checkbox
          </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <label class="form-check-label" htmlFor="defaultCheck1">
         Default checkbox
       </label>
       </div>
       <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
       <label class="form-check-label" htmlFor="defaultCheck1">
        Default checkbox
       </label>
       </div>
       <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
      <label class="form-check-label" htmlFor="defaultCheck1">
        Default checkbox
      </label>
      </div>
      <h1 class="text-dark">Año</h1>
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
      <label class="form-check-label" htmlFor="defaultCheck1">
        Default checkbox
       </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
      <label class="form-check-label" htmlFor="defaultCheck1">
       Default checkbox
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
       <label class="form-check-label" htmlFor="defaultCheck1">
       Default checkbox
      </label>
      </div>
     <div class="form-check">
     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
     <label class="form-check-label" htmlFor="defaultCheck1">
       Default checkbox
     </label>
    </div>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
    <label class="form-check-label" htmlFor="defaultCheck1">
      Default checkbox
    </label>
    </div>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
    <label class="form-check-label" htmlFor="defaultCheck1">
      Default checkbox
    </label>
    </div>
    </aside>
    <section class=" col-8 col-md-4 container">
    <div class="">
    <a href="#" class="text-dark">Se ha quitado la decoración de texto de este enlace</a>
    </div>
    <div>
    <a href="#" class="text-dark">Se ha quitado la decoración de texto de este enlace</a>
    </div>
   </section>
  </main>
  <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Arica, Chile</p></div>
  </footer>
 </>
 )
}
