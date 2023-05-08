import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '@/styles/Home.module.css'
import Router from 'next/router'
import Cookies from 'js-cookie'
const jwt = require('jsonwebtoken');
import Cookies from 'js-cookie'
const secretToken = "M+Yidu6bWMk9GKkJopL0Sk+ri/RRcBFTF5DmxvbBZaJj+ouXBWzNeSb0qf+rG0GuLXqeD34vZ0RKH2LnS+0INw=="
let url ="https://middle-two.vercel.app/files/"



export default function Lobby() {
 
<<<<<<< HEAD
    Cookies.get('sesion')
    let algebra = 'Algebra'
    let calculo = 'Calculo'
    let programacion = 'Programacion'

    function archivos(x){
        let data = x

        const token = jwt.sign(data, secretToken);

        let config ={
             method: "POST",
            headers: {
            Authorization: `Bearer ${token}`
         }
        }
        let nueva_url = url+x
        console.log(nueva_url)
        fetch(nueva_url,config).then((response) => response.json()).then((data) => {
            const archivos = data;
            let cant = archivos
            console.log(cant)
        
            
        })
    }
=======
    useEffect(() => {
        //const sessionToken = Cookies.get('sesion');
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
>>>>>>> 06e2f641f0cdb26e67c3a6d2df5578d46f345e47



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
<<<<<<< HEAD
                  <li className="nav-item"><a className="nav-link" onClick={() => Cookies.remove('sesion')}>Cerrar Sesión</a></li>

=======
                  <li className="nav-item"><a className="nav-link" href="Lobby" onClick={() => Cookies.remove('sesion')}>Cerrar Sesión</a></li>
>>>>>>> 06e2f641f0cdb26e67c3a6d2df5578d46f345e47
            
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
                                    
                                    <h2 className="card-title h4">Calculo</h2>
                                    <p className="card-text" onLoad= {archivos(calculo)} ></p>
                                    
                                    <a className="btn btn-primary" href="#!">Acceder →</a>
                                </div>
                            </div>
                     
                            <div className="card mb-4">
                                <a href="#!"></a>
                                <div className="card-body">
                                    
                                    <h2 className="card-title h4">Algebra</h2>
                                    <p className="card-text" onLoad= {archivos(algebra)} ></p>
                                    <a className="btn btn-primary" href="#!">Acceder →</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                  
                            <div className="card mb-4">
                                <a href="#!"></a>
                                <div className="card-body">
                                    
                                    <h2 className="card-title h4">Programacion</h2>
                                    <p className="card-text" onLoad= {archivos(programacion)} ></p>
                                    <a className="btn btn-primary" href="#!">Acceder →</a>
                                </div>
                            </div>
                  
            
                        </div>
                    </div>
                    
                </div>
        
                <div className="col-lg-4">
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
