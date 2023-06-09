import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import Router from 'next/router';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';

const url = process.env.NEXT_PUBLIC_MIDDLE_URL;
const secretToken = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export default function AdminPanel() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAdmin();
        fetchUsers();
    }, []);

    // Función para obtener los datos de administrador
    const fetchAdmin = async () => {
        try {
            // Obtengo el email de la cookie
            const email = Cookies.get('email');
            const token = jwt.sign(email, secretToken);

            // Establezco la estructura de la solicitud
            let config = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            // Establezco la nueva URL para la solicitud
            const new_url = url + '/admin'
            const response = await fetch(new_url, config);

            if (!response.ok) {
                console.log('Acceso denegado');
                Router.push('/Lobby');
            }

        } catch (error) {
            console.log(error);
        }
    };

    // Función para obtener la lista de usuarios
    const fetchUsers = async () => {
        try {
            const newUrl = url + `/usuario`;
            const response = await fetch(newUrl);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    // Función para cambiar el rol de un usuario
    const handleRoleChange = async (userId, newRole) => {
        try {
            if (newRole === "Seleccionar") {
                return; // Ignorar la opción "Seleccionar"
            }

            const role = jwt.sign(newRole, secretToken);
            // Establezco la estructura de la solicitud
            let config = {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${role}`
                }
            }
            const newUrl = url + `/usuario/${userId}`;

            const response = await fetch(newUrl, config);
            if (!response.ok) {
                console.log('Acceso denegado');
            }
            else {
                console.log('Rol del usuario actualizado exitosamente');
                await fetchUsers();
                await fetchAdmin();
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Navbar />
            <h1>Panel de Administración</h1>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>

                                <select
                                    value={user.id} // Establece el valor seleccionado en función del ID del usuario actual
                                    onChange={(e) => handleRoleChange(user.id, e.target.value)} // Maneja el cambio de selección llamando a la función handleRoleChange con el ID del usuario y el nuevo valor seleccionado
                                >
                                    <option value="Seleccionar">Seleccionar Rol a cambiar</option>
                                    <option value="Alumno">Alumno</option>
                                    <option value="Profesor">Profesor</option>
                                    <option value="Administrador">Administrador</option>
                                </select>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </div>
    );
}
