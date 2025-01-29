import Producto from "./Producto"

const ListaProductos: React.FC = () => {
    const productos = [
        { id: 1, titulo: 'Teclado', precio: 100, stock: 10 },
        { id: 2, titulo: 'Ratón USB', precio: 50, stock: 0 },
        { id: 3, titulo: 'Monitor', precio: 200, stock: 5 },
        { id: 4, titulo: 'Impresora', precio: 150, stock: 0 },
        { id: 5, titulo: 'Altavoces', precio: 80, stock: 15 },
        { id: 6, titulo: 'Micrófono', precio: 60, stock: 12 }
    ]

    return (
        <div className='productos'>
            <h2>Lista de productos</h2>
            <ul>
                {productos.map(producto => (
                    <Producto
                        key={producto.id}
                        titulo={producto.titulo}
                        precio={producto.precio}
                        stock={producto.stock} />
                ))}
            </ul>
        </div>
    )
}

export default ListaProductos