import { client } from './lib/supabase.ts'

const {data: session, error} = await client.auth.getSession()

export function Header({ session }) {
    return (
        <header className="mx-60 mt-10 m-auto h-[100px] content-center bg-blue-400 rounded-xl text-center text-white">
            <h1 className="text-3xl">Tienda de electrónica</h1>
            <p className="text-[11px]">Hola {session?.user.user_metadata.nombre ?? "usuario"}</p>
        </header>
    )
}