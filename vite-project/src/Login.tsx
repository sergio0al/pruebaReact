import { client } from "./lib/supabase"

export function Login(){
    return (
        <main className="min-h-[calc(100vh_-_290px)]">
            <form action="" className="bg-gray-200 p-6 rounded-lg max-w-sm mx-auto my-6 flex flex-col gap-3" id="formSession">
                <label className="flex flex-col text-sm font-medium">
                    Email
                    <input type="email" name="email" id="email" required
                        className="mt-1 p-2 border border-gray-400 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </label>
                <label className="flex flex-col text-sm font-medium">
                    Nombre
                    <input type="text" name="nombre" id="nombre"
                        className="mt-1 p-2 border border-gray-400 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </label>
                <label className="flex flex-col text-sm font-medium">
                    Password
                    <input type="password" name="password" id="password" required minLength={6}
                        className="mt-1 p-2 border border-gray-400 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </label>
                <button type="submit" id="entrarBtn"
                    className="bg-black text-white py-2 rounded hover:bg-gray-800 cursor-pointer">
                    Entrar	
                </button>
                <button type="submit" id="registrarseBtn"
                    className="bg-black text-white py-2 rounded hover:bg-gray-800 cursor-pointer">
                    Registrarse	
                </button>
            </form>

            <p id="mensajeError" className="text-center text-[10px] text-red-500 font-bold"></p>
        </main>
    )
}


export function iniciarLogin(){

    const entrarBtn = document.querySelector("#entrarBtn")
    const registrarseBtn = document.querySelector("#registrarseBtn")
    const mensajeError = document.querySelector<HTMLElement>("#mensajeError")!

    const credencialEmail = document.querySelector<HTMLInputElement>("#email")!
    const credencialPassword = document.querySelector<HTMLInputElement>("#password")!
    const credencialNombre = document.querySelector<HTMLInputElement>("#nombre")!


    // Login  
    entrarBtn?.addEventListener("click", async function(e){
        e.preventDefault()
        const { error } = await client.auth.signInWithPassword({email: credencialEmail.value, password: credencialPassword.value,})
        if(error){
            mensajeError.textContent = error.message
        }
    })


    // Register 
    registrarseBtn?.addEventListener("click", async function(e){
        e.preventDefault()
        const { error } = await client.auth.signUp({email: credencialEmail.value,password: credencialPassword.value, options: { data: { nombre: credencialNombre.value } },})

        if(error){
            mensajeError.textContent = error.message
        }
    })


    client.auth.onAuthStateChange((event, session) => {
        if (session) {
            location.hash = ""
        } else {
            mensajeError.textContent = ""
        }
    })


}

