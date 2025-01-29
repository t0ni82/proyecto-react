import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ListaProductos from './components/ListaProductos'

function App() {
  return (
    <>
      <Header />
      <main>
        <ListaProductos />
      </main>
      <Footer />
    </>
  )
}

export default App
