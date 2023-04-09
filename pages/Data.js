//En proceso

import { useState } from 'react'
import { supabase } from '../utils/supabase'

export default function Signup() {
  const [nom, setNom] = useState('')
  const [rut, setRut] = useState('')

  const handleSignup = async (event) => {
    event.preventDefault()
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (error) {
      console.log('Error:', error.message)
    } else {
      console.log('Usuario:', email)
      const { data, error } = await supabase.from('usuario').insert([{correo: email, nombre: nom, rut: rut, contrasena: password}])
      if (error) {
        console.log('Error:', error.message)
      } else {
        console.log('Registro insertado:', data)
      }
    }
  }

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSignup}>
      <label>
          Nombre:
          <input
            type="text"
            value={nom}
            onChange={(event) => setNom(event.target.value)}
          />
        </label>
        <br />
        <label>
          Rut:
          <input
            type="text"
            value={rut}
            onChange={(event) => setRut(event.target.value)}
          />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}
