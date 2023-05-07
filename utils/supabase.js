import { createClient } from '@supabase/supabase-js';

// Datos de conexión a la primera base de datos
const supabaseUrl1 = process.env.NEXT_PUBLIC_SUPABASE_URL_1;
const supabaseAnonKey1 = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_1;

// Datos de conexión a la segunda base de datos
const supabaseUrl2 = process.env.NEXT_PUBLIC_SUPABASE_URL_2;
const supabaseAnonKey2 = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_2;

export async function connect() {
  try {
    const supabase1 = createClient(supabaseUrl1, supabaseAnonKey1);
    const { data, error1 } = await supabase1.from('status').select();
    console.log('error: %o',error1)
    console.log('data: %o',data)
    if (data!=null) {
      console.log('Conectado a la base de datos 1');
      return supabase1;
    }
  } catch (err) {
    console.error(`Error al conectar a la base de datos 1: ${err}`);
  }

  try {
    const supabase2 = createClient(supabaseUrl2, supabaseAnonKey2);
    const { data, error2 } = await supabase2.from('status').select();
    console.log('error: %o',error2)
    console.log('data: %o',data)
    if (data!=null) {
      console.log('Conectado a la base de datos 2');
      return supabase2;
    }
  } catch (err) {
    console.error(`Error al conectar a la base de datos 2: ${err}`);
  }

  console.error('No se pudo conectar a ninguna base de datos');
  return null;
}
