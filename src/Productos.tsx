import React, { useEffect } from 'react';
import './Productos.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ListaProductos from './components/ListaProductos'


function Productos() {
  const [likes, setLikes] = React.useState(0);
  const [title, setTitle] = React.useState("Hola Mundo");

  useEffect(() => {
    setTimeout(() => { setTitle("Hola Mundo desde React") }, 4000);
  }, []);

  function handleClick() {
    setLikes(likes + 1);
    console.log("has clicado en Like! " + likes + " veces");
  }

  return (
    <>
      <Header titulo={title} />
      <main>
        <button onClick={handleClick}>Likes {likes}</button>
        <ListaProductos />
        <p>Numero de likes es: {likes}</p>
      </main>
      <Footer />
    </>
  )
}

export default Productos
