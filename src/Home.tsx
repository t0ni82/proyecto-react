import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            <Header titulo="Pagina Home" />
            <main>
                <Link to="/productos">Ver productos</Link>
                <p>Esta es la pagina principal</p>
            </main>
            <Footer />
        </>
    );
}

export default Home;