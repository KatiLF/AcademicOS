import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
import Router from 'next/router'
let url = "http://190.92.148.107:3000"

const Home = () => {
    const [sender, setSender] = useState('');
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
        const sender = Cookies.get('email');
        try {
            const new_url = url + '/send-email'
            const response = await fetch(new_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sender, message, messageType })
            });

            if (response.ok) {
                console.log('Correo electrónico enviado correctamente.');
                // Restablecer los campos del formulario después de enviar el correo electrónico
                setSender('');
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