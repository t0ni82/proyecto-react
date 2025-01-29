import React, { useEffect } from 'react';
import './Productos.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ListaProductos from './components/ListaProductos'
import { Link } from 'react-router-dom';


function Productos() {
  const [likes, setLikes] = React.useState(0);


  useEffect(() => {
    //Se ejecuta cuando se monta el componente
  }, []);

  function handleClick() {
    setLikes(likes + 1);
    console.log("has clicado en Like! " + likes + " veces");
  }

  return (
    <>
      <Header titulo="Pagina de productos" />
      <main>
        <Link to="/">Ir a Home</Link>
        <button onClick={handleClick}>Likes {likes}</button>
        <ListaProductos />
        <p>Numero de likes es: {likes}</p>
      </main>
      <Footer />
    </>
  )
}

export default Productos
