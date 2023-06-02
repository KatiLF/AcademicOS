import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'
import Router from 'next/router'

let url ="https://middleware-aos.vercel.app/files/archivo"
//let url = "http://localhost:3000/etiquetas"

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
            const new_url = url + `?id=${id}`
            const response = await fetch(new_url);
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

            const response = await fetch(url, {
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
            const new_url = url + `/${updateId}`
            const response = await fetch(new_url, {
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
            const new_url = url + `/${id}`
            const response = await fetch(new_url, {
                method: 'DELETE',
            });
            console.log('Archivo eliminado exitosamente');
            fetchArchivos();
        } catch (error) {
            console.error('Error deleting archivo:', error.message);
        }
    }

    return (
        <div>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Ocultar' : 'Mostrar'}
            </button>

            {showForm && (
                <form onSubmit={updateId ? updateArchivo : createArchivo}>
                    <input
                        type="text"
                        value={nombreArchivo}
                        onChange={(e) => setNombreArchivo(e.target.value)}
                        placeholder="Nombre del archivo"
                    />
                    <input type="file" onChange={handleFileChange} />
                    <button type="submit">{updateId ? 'Actualizar Archivo' : 'Crear Archivo'}</button>
                </form>
            )}

            <table>
                <thead>
                    <tr>
                        <th>Archivo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((archivo) => (
                        <tr key={archivo.id}>
                            <td>{archivo.nombre_archivo}</td>
                            <td>
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
                            </td>
                            <td>
                                <button>
                                    <a href={archivo.url_azura} download={archivo.nombre_archivo}>
                                        Visualizar Archivo
                                    </a>
                                </button>
                                <button onClick={() => setUpdateFormValues(archivo)}>Editar</button>
                                <button onClick={() => deleteArchivo(archivo.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}
