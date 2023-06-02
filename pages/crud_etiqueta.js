import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link';
import Cookies from 'js-cookie'
import Router from 'next/router'

const secretToken = "M+Yidu6bWMk9GKkJopL0Sk+ri/RRcBFTF5DmxvbBZaJj+ouXBWzNeSb0qf+rG0GuLXqeD34vZ0RKH2LnS+0INw=="
let url = "http://localhost:3000/etiquetas"



export default function MyTable() {
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
    if (document.cookie.indexOf('sesion') === -1) {
      // La cookie no existe
      console.log('la cookie no existe');
      Router.push('/');
    } else {
      // La cookie existe
      console.log('la cookie existe');
    }
  }, []);

  // Leer registros
  async function fetchEtiquetas() {

    //Realiza una solicitud para obtener los registros desde el servidor, espera 
    //Al recibir la respuesta, convierte los datos en formato JSON y los almacena data
    fetch('http://localhost:3000/etiquetas')
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

  // Crear un registro
  //Se ejecuta cuando se envía el formulario(formValues) para crear un nuevo registro
  // Crear un registro
  function createEtiqueta(event) {
    event.preventDefault();
    fetch('http://localhost:3000/etiquetas', {
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
    fetch(`http://localhost:3000/etiquetas/${updateId}`, {
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
    fetch(`http://localhost:3000/etiquetas/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('Registro eliminado exitosamente');
        fetchEtiquetas();
      })
      .catch((error) => console.error('Error deleting etiqueta:', error.message));
  }

  return (
    <div>
      {/* Botón que permite alternar la visibilidad del formulario */}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Ocultar' : 'Mostrar'}
      </button>

      {/* Si showForm es true, muestra el formulario con los campos de entrada 
      y los botones correspondientes para crear o actualizar un registro */}
      {showForm && (
        //Si updateID(un registro exitente) esta disponible ejecutara la updateEtiqueta, sino ejecutara createEtiqueta
        <form onSubmit={updateId ? updateEtiqueta : createEtiqueta}>
          <input
            type="text"
            name="etiqueta"
            value={formValues.etiqueta}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="description"
            value={formValues.description}
            onChange={handleFormChange}
          />
          {/* Si updateID(un registro exitente) esta disponible mostrar 'Actualizar Registro sino mostrara 'Crear Registro' */}
          <button type="submit">{updateId ? 'Actualizar Registro' : 'Crear Registro'}</button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>Nombre Etique</th>
            <th>Description</th>
            <th>Link</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((etiqueta) => (
            <tr key={etiqueta.id}>
              <td>{etiqueta.etiqueta}</td>
              <td>{etiqueta.description}</td>
              <td>
                <Link href={`/etiqueta/${etiqueta.id}`}>
                  {etiqueta.etiqueta}
                </Link>
              </td>
              <td>
                <button onClick={() => setUpdateFormValues(etiqueta)}>Editar</button>
                <button onClick={() => deleteEtiqueta(etiqueta.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
