
type dataProducto = {
    id: string, 
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number,
}

export function Datos({producto}: {producto: dataProducto}){
    return (
        <section className=" min-h-[calc(100vh_-_290px)]">
            <main className="max-w-xl mx-auto my-10 p-6 bg-gray-200 rounded-xl">
                <a href="/home" className="text-blue-600 underline text-sm">← Volver</a>

                <h1 className="text-2xl font-bold mt-4">{producto.nombre}</h1>
                <p className="mt-2">{producto.descripcion ?? "Sin descripción"}</p>
                <p className="mt-4 font-semibold">{producto.precio} €</p>
                <p className="text-sm">Stock: {producto.stock}</p>
                <a href={`#${producto.id}`}>Añadir al carrito</a>
            </main>
        </section>
    )
}