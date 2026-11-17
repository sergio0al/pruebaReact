import { getProductos } from "./lib/supabase"

type dataProducto = {
    id: string, 
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number,
}

const data:dataProducto[] = await getProductos()


export function App() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mx-60 mt-10 min-h-[calc(100vh_-_290px)]">
      {data.map((p) => (
        <a key={p.id} href={`/#${p.id}`} className="group flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gray-400 transition duration-200">
            <div>
                <h2 className="text-lg font-semibold leading-snug group-hover:text-blue-600 transition-colors">
                    {p.nombre}
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                    {p.stock > 0 ? `${p.stock} en stock` : "Agotado"}
                </p>
            </div>

            <div className="flex items-center justify-between mt-6">
                <p className="text-xl font-bold">{p.precio} €</p>
                <span className="text-sm bg-black text-white px-3 py-1 rounded-full group-hover:bg-blue-600 transition-colors">
                    Ver
                </span>
            </div>
        </a>
      ))}
    </section>
  )
}