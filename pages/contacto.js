import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
import Router from 'next/router'
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
            <h1>Enviar correo electrónico</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Mensaje:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <div>
                    <label>Tipo de mensaje:</label>
                    <input type="text" value={messageType} onChange={(e) => setMessageType(e.target.value)} required />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Home;