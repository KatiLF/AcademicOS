import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
import Router from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MyTable() {
    const [data, setData] = useState([]);
    const [updateId, setUpdateId] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [nombreArchivo, setNombreArchivo] = useState('');

    const router = useRouter();
    const { id } = router.query; // Obtiene el valor de la ID desde la ruta

    useEffect(() => {
        if (id) {
            fetchArchivos(id);
        }
        if (document.cookie.indexOf('sesion') === -1) {
            // La cookie no existe
            console.log('la cookie no existe');
            Router.push('/');
        }
    }, [id]);

    async function fetchArchivos(event) {
        try {
            const response = await fetch(`http://190.92.148.107:4041/archivo?id=${id}`);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching archivos:', error.message);
        }
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        setSelectedFile(file);
        setNombreArchivo(file.name);
    }

    async function createArchivo(event) {
        event.preventDefault();
        try {
            const email = Cookies.get('email');
            const formData = new FormData();
            formData.append('email', email)
            formData.append('file', selectedFile);
            formData.append('etiqueta_id', id)
            formData.append('nombre_archivo', nombreArchivo);

            const response = await fetch('http://190.92.148.107:4041/archivo', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            console.log(email)
            console.log('Archivo creado exitosamente');
            fetchArchivos();
        } catch (error) {
            console.error('Error creating archivo:', error.message);
        }
    }

    async function updateArchivo(event) {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('nombre_archivo', nombreArchivo);

            const response = await fetch(`http://190.92.148.107:4041/archivo/${updateId}`, {
                method: 'PUT',
                body: formData,
            });

            const data = await response.json();
            console.log('Archivo actualizado exitosamente');
            fetchArchivos();
            setUpdateId(null);
        } catch (error) {
            console.error('Error updating archivo:', error.message);
        }
    }

    function setUpdateFormValues(archivo) {
        setUpdateId(archivo.id);
        setNombreArchivo(archivo.nombre_archivo);
    }

    async function deleteArchivo(id) {
        try {
            const response = await fetch(`http://190.92.148.107:4041/archivo/${id}`, {
                method: 'DELETE',
            });
            console.log('Archivo eliminado exitosamente');
            fetchArchivos();
        } catch (error) {
            console.error('Error deleting archivo:', error.message);
        }
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

            <div className="row justify-content-center pt-1 mb-1">

                <button type="submit" className="btn btn-secondary" onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Ocultar' : 'Mostrar'}
                </button>

                <div className="row justify-content-center">
                    {showForm && (
                        <form onSubmit={updateId ? updateArchivo : createArchivo}>
                            <input
                                type="text"
                                value={nombreArchivo}
                                onChange={(e) => setNombreArchivo(e.target.value)}
                                placeholder="Nombre del archivo"
                            />
                            <input type="file" onChange={handleFileChange} />
                            <button type="submit" className="btn btn-primary">{updateId ? 'Actualizar Archivo' : 'Crear Archivo'}</button>
                        </form>
                    )}
                </div>

                {data.map((archivo) => (
                    <div className="container" key={archivo.id}>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="card-deck">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>{archivo.nombre_archivo}</h4>
                                            {archivo.formato === 'application/pdf' ? (
                                                <a href={archivo.url_azura} target="_blank" rel="noopener noreferrer">
                                                    <img src="/pdf-icon.png" alt="PDF Icon" width="150" height="150" />
                                                </a>
                                            ) : archivo.formato === 'image/png' ? (
                                                <a href={archivo.url_azura} target="_blank" rel="noopener noreferrer">
                                                    <img src="/image-icon.png" alt="Image Icon" width="150" height="150" />
                                                </a>
                                            ) : archivo.formato === 'application/msword' || archivo.formato === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ? (
                                                <a href={archivo.url_azura} target="_blank" rel="noopener noreferrer">
                                                    <img src="/word-icon.png" alt="Word Icon" width="150" height="150" />
                                                </a>
                                            ) : archivo.formato === 'application/vnd.ms-excel' || archivo.formato === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ? (
                                                <a href={archivo.url_azura} target="_blank" rel="noopener noreferrer">
                                                    <img src="/excel-icon.png" alt="Excel Icon" width="150" height="150" />
                                                </a>
                                            ) : archivo.formato === 'application/vnd.ms-powerpoint' || archivo.formato === 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ? (
                                                <a href={archivo.url_azura} target="_blank" rel="noopener noreferrer">
                                                    <img src="/powerpoint-icon.png" alt="PowerPoint Icon" width="150" height="150" />
                                                </a>
                                            ) : archivo.formato === 'video/mp4' ? (
                                                <a href={archivo.url_azura} target="_blank" rel="noopener noreferrer">
                                                    <img src="/mp4-icon.png" alt="MP4 Icon" width="150" height="150" />
                                                </a>
                                            ) : archivo.formato === 'text/plain' ? (
                                                <a href={archivo.url_azura} target="_blank" rel="noopener noreferrer">
                                                    <img src="/txt-icon.png" alt="TXT Icon" width="150" height="150" />
                                                </a>
                                            ) : (
                                                <img src="/default-icon.png" alt="Archivo desconocido" width="150" height="150" />
                                            )}

                                        </div>
                                        <div className="row justify-content-center">
                                            <button type="button" className="btn btn-info">
                                                <a href={archivo.url_azura} download={archivo.nombre_archivo}>
                                                    Visualizar Archivo
                                                </a>
                                            </button>
                                            <button type="button" className="btn btn-success" onClick={() =>
                                                setUpdateFormValues(archivo)}>Editar</button>
                                            <button type="button" className="btn btn-danger" onClick={() => deleteArchivo(archivo.id)}>Eliminar</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Arica, Chile</p></div>
            </footer>
        </>
    );
}
