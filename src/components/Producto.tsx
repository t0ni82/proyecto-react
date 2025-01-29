import './Producto.css';
const Producto: React.FC<{ titulo: string, precio: number, stock: number }> = ({ titulo, precio, stock }) => {
    return (
        <li className={stock === 0 ? 'no-stock' : ''}>
            Producto: {titulo} precio: {precio} €
            {stock === 0 ?
                <span> (sin stock)</span> :
                <span> (quedan {stock} en stock)</span>}
        </li>
    );
};

export default Producto;