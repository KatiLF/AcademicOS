import { useState } from 'react'
import { supabase } from '../utils/supabase'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    const { user, error } = await supabase.auth.signInWithPassword({
       correo: username,
       contrasena: password,
    })
    if (error) {
      console.log('Error:', error.message)
    } else {
      console.log('Usuario:', user)
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary p-5 rounded'>
      <form onSubmit={handleLogin}>
        <label className="display-5">
          Iniciar Sesion
        </label>
        <br />
        <label>
          Nombre de usuario:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}
