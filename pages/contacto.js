import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
import Link from 'next/link';
import Router from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'
let url = "http://190.92.148.107:4040"
//let url = "http://localhost:4040"


const jwt = require('jsonwebtoken');
const secretToken = "M+Yidu6bWMk9GKkJopL0Sk+ri/RRcBFTF5DmxvbBZaJj+ouXBWzNeSb0qf+rG0GuLXqeD34vZ0RKH2LnS+0INw=="

const Home = () => {
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    useEffect(() => {
        Cookies.get('sesion')
        if (document.cookie.indexOf('sesion') === -1) {
            // La cookie no existe
            console.log('No se estrablecio Conexion');
            Router.push('/');
        } else {
            // La cookie existe
            console.log('Existe Conexion');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            //Obtengo el email de la cookie
            const sender = Cookies.get('email');

            //Establesco las variables a enviar al servidor
            let data = {
                sender,
                message,
                messageType
            }
            //Encripto los datos a enviar
            const token = jwt.sign(data, secretToken);

            //Establesco la estructura, lo voy a poner en el headers, en lugar del body
            let config = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            //Establesco nueva url
            const new_url = url + '/send-email'
            const response = await fetch(new_url, config);

            if (response.ok) {
                console.log('Correo electrónico enviado correctamente.');
                // Restablecer los campos del formulario después de enviar el correo electrónico
                setMessage('');
                setMessageType('');
            } else {
                console.log('Error al enviar el correo electrónico.');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#!"><img src="/Logouta.png" alt="logo UTA" id="logoUTA" height={40} width={30}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="Lobby">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="Recursos">Recursos</a></li>
                            <li className="nav-item"><a className="nav-link" href="acerca">Acerca de mi</a></li>
                            <li className="nav-item">
                                <Link className="nav-link" href={`contacto`}>
                                    Contacto
                                </Link>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="Lobby" onClick={() => Cookies.remove('sesion')}>Cerrar Sesión</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="py-5 bg-light border-bottom mb-4">
                <div className="container">
                    <div className="text-center my-5">
                        <h1 className="fw-bolder">Contacta con un Administrador</h1>
                        <p className="lead mb-0">Envia un correo eléctronico a un administrador si necesitas asistencia.</p>
                    </div>
                </div>
            </header>
            <div className="container">
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Mensaje</label>
                        <textarea className="form-control" rows="3" placeholder="Escribe aqui tu mensaje..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>

                    <div className="form-group">
                        <label>Tipo de Mensaje</label>
                        <input type="text" className="form-control" placeholder="Escribe aqui el tipo de mensaje..." value={messageType} onChange={(e) => setMessageType(e.target.value)} required />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
                <br />
            </div>
            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Arica, Chile</p></div>
            </footer>
        </div>

    );
};

export default Home;