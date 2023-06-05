import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Router from 'next/router'
import Cookies from 'js-cookie'
//import { url } from 'inspector';

//let url ="https://middleware-aos.vercel.app/files/etiquetas"
let url = "http://190.92.148.107:4041/etiquetas"

export default function Lobby() {

    //Almacena los datos de la tabla
    const [data, setData] = useState([]);
    //Almacena los valores del formulario para crear o actualizar registros
    const [formValues, setFormValues] = useState({
        etiqueta: '',
        description: '',
    });
    //Almacena el ID del registro que se va a actualizar
    const [updateId, setUpdateId] = useState(null);
    //Controla la visibilidad del formulario
    const [showForm, setShowForm] = useState(false);

    /* Se utiliza para cargar los registros iniciales llamando a la función fetchEtiquetas() al inicir,
       solo lo hara una vez([])  
    */
    useEffect(() => {
        fetchEtiquetas();
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

    // Leer registros
    async function fetchEtiquetas() {

        //Realiza una solicitud para obtener los registros desde el servidor, espera 
        //Al recibir la respuesta, convierte los datos en formato JSON y los almacena data
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
            .catch((error) => console.error('Error fetching etiqueta:', error.message));

    }

    // Actualizar el valor del formulario, maneja el cambio de valores en los campos del formulario.
    function handleFormChange(event) {
        /* Obtiene el nombre y el valor del campo que se ha modificado y actualiza 
           el estado formValues agregando o sobrescribiendo la propiedad correspondiente
         */
        const { name, value } = event.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    }

    //Se ejecuta cuando se envía el formulario(formValues) para crear un nuevo registro
    // Crear un registro
    function createEtiqueta(event) {
        event.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Registro creado exitosamente');
                fetchEtiquetas();
                setFormValues({
                    etiqueta: '',
                    description: '',
                });
            })
            .catch((error) => console.error('Error creating etiqueta:', error.message));
    }

    // Actualizar un registro, se ejecuta cuando se envía el formulario para actualizar un registro existente
    function updateEtiqueta(event) {
        event.preventDefault();

        const new_url = url + `/${updateId}`
        fetch(new_url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Registro actualizado exitosamente');
                fetchEtiquetas();
                setFormValues({
                    etiqueta: '',
                    description: '',
                });
                setUpdateId(null);
            })
            .catch((error) => console.error('Error updating etiqueta:', error.message));
    }
    // Establecer los valores del formulario y updateId para la actualización
    /* Se utiliza cuando se hace clic en el botón "Editar" de un registro para 
       mostrar los valores actuales en el formulario
    */
    function setUpdateFormValues(etiqueta) {
        setFormValues({
            etiqueta: etiqueta.etiqueta || '',
            description: etiqueta.description || '',
        });
        setUpdateId(etiqueta.id);
    }

    // Eliminar un registro
    function deleteEtiqueta(id) {
        const new_url = url + `/${id}`
        fetch(new_url, {
            method: 'DELETE',
        })
            .then((response) => {
                console.log('Registro eliminado exitosamente');
                fetchEtiquetas();
            })
            .catch((error) => console.error('Error deleting etiqueta:', error.message));
    }

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
                        <h1 className="fw-bolder">Bienvenido</h1>
                        <p className="lead mb-0">Accede a los archivos disponibles o sube el tuyo!</p>
                    </div>
                </div>
            </header>

            <div className="container " >
                <div >
                    {/* Botón que permite alternar la visibilidad del formulario */}
                    <button type="submit" className="btn btn-secondary" onClick={() => setShowForm(!showForm)}>
                        {showForm ? 'Ocultar' : 'Mostrar'}
                    </button>

                    {/* Si showForm es true, muestra el formulario con los campos de entrada 
                    y los botones correspondientes para crear o actualizar un registro */}
                    {showForm && (
                        //Si updateID(un registro exitente) esta disponible ejecutara la updateEtiqueta, sino ejecutara createEtiqueta
                        <form onSubmit={updateId ? updateEtiqueta : createEtiqueta}>
                            <input className="input-group-prepend"
                                type="text"
                                name="etiqueta"
                                placeholder="etiqueta"
                                value={formValues.etiqueta}
                                onChange={handleFormChange}
                            />
                            <input
                                type="text"
                                name="description"
                                value={formValues.description}
                                onChange={handleFormChange}
                                placeholder="descripcion"
                            />
                            {/* Si updateID(un registro exitente) esta disponible mostrar 'Actualizar Registro sino mostrara 'Crear Registro' */}
                            <button type="submit" className="btn btn-secondary">{updateId ? 'Actualizar Registro' : 'Crear Registro'}</button>
                        </form>
                    )}
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="square-cell">Nombre Etiqueta</th>
                                <th className="square-cell">Description</th>
                                <th className="square-cell">Link</th>
                                <th className="square-cell">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((etiqueta) => (
                                <tr key={etiqueta.id}>
                                    <td className="square-cell">{etiqueta.etiqueta}</td>
                                    <td className="square-cell">{etiqueta.description}</td>
                                    <td>
                                        <Link className="btn btn-primary" role="button" href={`/etiqueta/${etiqueta.id}`}>
                                            {etiqueta.etiqueta}
                                        </Link>
                                    </td>
                                    <td className="square-cell">
                                        <button type="button" className="btn btn-success" onClick={() => setUpdateFormValues(etiqueta)}>Editar</button>
                                        <button type="button" className="btn btn-danger" onClick={() => deleteEtiqueta(etiqueta.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            </div>

            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Arica, Chile</p></div>
            </footer>

        </>
    )
}
