import { useState } from 'react'
import { supabase } from '../utils/supabase'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
      if (error) {
        console.log('Error:', error.message)
      } else {
        //console.log('Registro insertado:', data)
      }
    }
  }

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSignup}>
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
